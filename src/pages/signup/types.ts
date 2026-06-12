export type UserType = "business" | "individual" | null;

export interface SignupFormData {
  // Step 1: Registration
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword?: string;
  country: string;
  userType: UserType;
  companyName?: string; // Optional for early capture
  referralSource?: string;

  // Step 3: Profile
  // Business
  legalStructure?: string;
  yearEstablished?: string;
  companySize?: string;
  turnover?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  industrySector?: string;
  businessAddress?: string;
  iecNumber?: string;
  gstNumber?: string;
  panNumber?: string;
  taxId?: string; // Generic
  companyRegistrationType?: string;
  // Individual
  professionalTitle?: string;
  nationality?: string;
  linkedinProfileUrl?: string;
  yearsOfExperience?: string;
  governmentId?: string;
  governmentIdType?: string;
  aadharNumber?: string;
  businessAssociation?: string;

  // Step 4: Details
  // Business
  businessRole?: string[];
  products?: string;
  targetMarkets?: string;
  preferredShippingMode?: string;
  keyCertifications?: string;
  tradeMemberships?: string;
  experience?: string;
  objective?: string;
  // Individual
  expertiseAreas?: string[];
  sectorsOfInterest?: string;
  languagesSpoken?: string;

  // Step 5: Documents
  documents?: File[];
}

export const initialFormData: SignupFormData = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  country: "India", // Default
  userType: "business",
};
