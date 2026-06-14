import * as z from "zod";

const fileSchema = z.custom<File>(
  (val) =>
    val instanceof File &&
    val.type === "application/pdf" &&
    val.size <= 5 * 1024 * 1024,
  "Must be a PDF file under 5MB",
);

export const signupSchema = z
  .object({
    // Step 1
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(100),
    email: z.string().email("Please enter a valid email address"),
    mobile: z.string().min(10, "Please enter a valid mobile number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    country: z.string().min(1, "Please select a country"),
    userType: z.enum(["business", "individual"], {
      message: "Please select a user type",
    }),
    companyName: z.string().optional(),
    referralSource: z.string().optional(),

    // Step 3
    // Business
    legalStructure: z.string().optional(),
    yearEstablished: z.string().optional(),
    companySize: z.string().optional(),
    turnover: z.string().optional(),
    websiteUrl: z
      .string()
      .optional()
      .refine(
        (val) => !val || val.startsWith("http") || val.startsWith("www"),
        { message: "Enter a valid URL" },
      ),
    linkedinUrl: z.string().optional(),
    industrySector: z.string().optional(),
    businessAddress: z.string().optional(),
    iecNumber: z.string().optional(),
    gstNumber: z.string().optional(),
    panNumber: z.string().optional(),
    internationalBusinessIds: z
      .array(
        z.object({
          type: z.string().min(1, "Required"),
          idNumber: z.string().min(1, "Required"),
        }),
      )
      .optional(),

    // Individual
    professionalTitle: z.string().optional(),
    nationality: z.string().optional(),
    linkedinProfileUrl: z.string().optional(),
    yearsOfExperience: z.string().optional(),
    internationalKycIds: z
      .array(
        z.object({
          type: z.string().min(1, "Required"),
          idNumber: z.string().min(1, "Required"),
        }),
      )
      .optional(),
    aadharNumber: z.string().optional(),
    businessAssociation: z.string().optional(),

    // Step 4
    // Business
    businessRole: z.array(z.string()).optional(),
    products: z.string().optional(),
    targetMarkets: z.string().optional(),
    keyCertifications: z.string().optional(),
    experience: z.string().optional(),
    objective: z.string().optional(),

    // Individual
    expertiseAreas: z.array(z.string()).optional(),
    sectorsOfInterest: z.string().optional(),
    languagesSpoken: z.string().optional(),

    // Step 5
    documents: z.array(fileSchema).optional(),
    productCatalogue: z.array(fileSchema).optional(),
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms and Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  // Step 1 Business requires companyName
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.companyName && data.companyName.trim().length > 0;
      return true;
    },
    { message: "Company name is required", path: ["companyName"] },
  )

  // Step 3 Business requires fields
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.legalStructure && data.legalStructure.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["legalStructure"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.yearEstablished && data.yearEstablished.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["yearEstablished"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.companySize && data.companySize.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["companySize"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.turnover && data.turnover.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["turnover"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.industrySector && data.industrySector.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["industrySector"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.businessAddress && data.businessAddress.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["businessAddress"] },
  )

  // Step 3 International Business Requires at least 1 ID if not India
  .refine(
    (data) => {
      if (data.userType === "business" && data.country !== "India") {
        return (
          data.internationalBusinessIds &&
          data.internationalBusinessIds.length > 0
        );
      }
      return true;
    },
    {
      message: "At least one ID is required",
      path: ["internationalBusinessIds"],
    },
  )

  // Step 3 International Individual Requires at least 1 ID if not India
  .refine(
    (data) => {
      if (data.userType === "individual" && data.country !== "India") {
        return data.internationalKycIds && data.internationalKycIds.length > 0;
      }
      return true;
    },
    { message: "At least one ID is required", path: ["internationalKycIds"] },
  )

  // Step 4 Business requires fields
  .refine(
    (data) => {
      if (data.userType === "business")
        return data.businessRole && data.businessRole.length > 0;
      return true;
    },
    { message: "Required", path: ["businessRole"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.products && data.products.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["products"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.targetMarkets && data.targetMarkets.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["targetMarkets"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.experience && data.experience.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["experience"] },
  )
  .refine(
    (data) => {
      if (data.userType === "business")
        return !!data.objective && data.objective.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["objective"] },
  )

  // Step 4 Individual requires fields
  .refine(
    (data) => {
      if (data.userType === "individual")
        return data.expertiseAreas && data.expertiseAreas.length > 0;
      return true;
    },
    { message: "Required", path: ["expertiseAreas"] },
  )
  .refine(
    (data) => {
      if (data.userType === "individual")
        return (
          !!data.sectorsOfInterest && data.sectorsOfInterest.trim().length > 0
        );
      return true;
    },
    { message: "Required", path: ["sectorsOfInterest"] },
  )
  .refine(
    (data) => {
      if (data.userType === "individual")
        return !!data.languagesSpoken && data.languagesSpoken.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["languagesSpoken"] },
  )
  .refine(
    (data) => {
      if (data.userType === "individual")
        return !!data.experience && data.experience.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["experience"] },
  )
  .refine(
    (data) => {
      if (data.userType === "individual")
        return !!data.objective && data.objective.trim().length > 0;
      return true;
    },
    { message: "Required", path: ["objective"] },
  )

  // Step 5 Document validations
  .refine(
    (data) => {
      return data.documents && data.documents.length > 0;
    },
    { message: "At least one document is required", path: ["documents"] },
  );

export type SignupFormData = z.infer<typeof signupSchema>;

export const initialFormData: Partial<SignupFormData> = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  country: "India",
  userType: "business",
  agreedToTerms: false,
  documents: [],
  productCatalogue: [],
  internationalBusinessIds: [{ type: "", idNumber: "" }],
  internationalKycIds: [{ type: "", idNumber: "" }],
};
