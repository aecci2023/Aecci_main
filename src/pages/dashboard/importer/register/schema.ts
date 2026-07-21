import * as z from "zod";

export const importerSignupSchema = z
  .object({
    userType: z.enum(["business", "individual"]),
    
    // Step 1 — Basic Registration
    fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
    email: z.string().email("Please enter a valid email address"),
    mobileNumber: z.string().min(10, "Please enter a valid mobile number"),
    countryCode: z.string().min(1, "Country code is required"),
    
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),

    country: z.string().min(1, "Please select your country"),
    companyName: z.string().optional(),
    professionalTitle: z.string().min(1, "Designation is required"),
    referralSource: z.string().optional(),

    // Step 3 — Business Information
    businessRole: z.string().min(1, "Nature of business is required"),
    importVolume: z.string().min(1, "Annual import volume is required"),
    products: z.array(z.string()).min(1, "Please list your products"),
    targetMarkets: z.array(z.string()).min(1, "Please select preferred countries"),

    // Step 4 — Deal Room Booking & Submit
    sessionId: z.string().optional(),
    
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms and Conditions",
    }),
  })
  .refine(
    (data) => {
      if (data.userType === "business") {
        return !!data.companyName && data.companyName.trim().length > 0;
      }
      return true;
    },
    {
      message: "Company name is required for business accounts",
      path: ["companyName"],
    },
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ImporterSignupFormData = z.infer<typeof importerSignupSchema>;

export const initialImporterFormData: Partial<ImporterSignupFormData> = {
  userType: "business",
  fullName: "",
  email: "",
  mobileNumber: "",
  countryCode: "+91",
  password: "",
  confirmPassword: "",
  country: "",
  companyName: "",
  professionalTitle: "",
  referralSource: "",
  businessRole: "",
  importVolume: "",
  products: [],
  targetMarkets: [],
  sessionId: "",
  agreedToTerms: false,
};
