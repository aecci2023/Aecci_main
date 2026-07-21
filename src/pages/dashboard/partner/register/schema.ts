import * as z from "zod";

const fileOrUrlSchema = z.union([
  z.custom<File>(
    (val) =>
      val instanceof File &&
      (val.type === "application/pdf" || ["image/jpeg", "image/png", "image/webp"].includes(val.type)) &&
      val.size <= 5 * 1024 * 1024,
    "Must be a PDF, JPG, PNG or WebP file under 5MB",
  ),
  z.string().url("Must be a valid URL"),
]);

const imageOrUrlSchema = z.union([
  z.custom<File>(
    (val) =>
      val instanceof File &&
      ["image/jpeg", "image/png", "image/webp"].includes(val.type) &&
      val.size <= 5 * 1024 * 1024,
    "Must be a JPG, PNG or WebP image under 5MB",
  ),
  z.string().url("Must be a valid URL"),
]);

const optionalUrl = z.union([z.string().url("Must be a valid URL"), z.literal(""), z.undefined()]);

export const partnerSignupSchema = z
  .object({
    // Step 1
    fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
    email: z.string().email("Please enter a valid email address"),
    mobile: z.string().min(10, "Please enter a valid mobile number"),
    country: z.string().min(1, "Please select a country"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),

    // Step 3 — Professional Profile
    professionalTitle: z.string().min(1, "Professional title is required"),
    organization: z.string().min(1, "Organization name is required"),
    yearsOfExperience: z.string().min(1, "Please select years of experience"),
    nationality: z.string().optional(),
    languagesSpoken: z.array(z.string()).min(1, "Please select at least one language"),
    bio: z.string().min(50, "Professional biography must be at least 50 characters"),
    motivation: z.string().min(20, "Please describe your motivation (min 20 chars)"),

    // Step 4 — Expertise & Presence
    expertiseCountries: z.array(z.string()).min(1, "Select at least one country of expertise"),
    expertiseSectors: z.array(z.string()).min(1, "Select at least one sector"),
    linkedinProfileUrl: optionalUrl,
    websiteUrl: optionalUrl,
    references: z.string().optional(),

    // Step 5 — Documents
    profilePicture: z.union([imageOrUrlSchema, z.undefined(), z.null()]).optional(),
    governmentId: z.union([fileOrUrlSchema, z.undefined(), z.null()]).optional(),
    professionalCert: z.union([fileOrUrlSchema, z.undefined(), z.null()]).optional(),
    businessProof: z.union([fileOrUrlSchema, z.undefined(), z.null()]).optional(),
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms and Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => data.governmentId !== undefined && data.governmentId !== null,
    {
      message: "Government ID document is required",
      path: ["governmentId"],
    },
  )
  .refine(
    (data) => data.profilePicture !== undefined && data.profilePicture !== null,
    {
      message: "Company logo is required",
      path: ["profilePicture"],
    },
  );

export type PartnerSignupFormData = z.infer<typeof partnerSignupSchema>;

export const initialPartnerFormData: Partial<PartnerSignupFormData> = {
  fullName: "",
  email: "",
  mobile: "",
  country: "",
  password: "",
  confirmPassword: "",
  professionalTitle: "",
  organization: "",
  yearsOfExperience: "",
  nationality: "",
  languagesSpoken: [],
  bio: "",
  motivation: "",
  expertiseCountries: [],
  expertiseSectors: [],
  linkedinProfileUrl: "",
  websiteUrl: "",
  references: "",
  agreedToTerms: false,
};
