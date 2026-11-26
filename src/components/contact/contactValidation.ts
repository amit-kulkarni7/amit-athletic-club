import { CountryCode } from "libphonenumber-js/max";
import { MEMBERSHIP_TIERS, PROGRAMS } from "@/data/siteContent";
import { validateInternationalPhoneNumber } from "@/components/contact/phoneValidation";

export type InquiryType = "membership" | "trial" | "program" | "general";
export type BillingPreference = "monthly" | "yearly";

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  selectedInterest?: string;
  message?: string;
}

export interface InterestOption {
  id: string;
  label: string;
}

export const MEMBERSHIP_OPTIONS: InterestOption[] = MEMBERSHIP_TIERS.map(
  (tier) => ({
    id: tier.id,
    label: `${tier.name} ($${tier.monthlyPriceUsd}/mo standard · $${tier.effectiveAnnualMonthlyUsd}/mo yearly)`,
  })
);

export const PROGRAM_OPTIONS: InterestOption[] = PROGRAMS.map((prog) => ({
  id: prog.id,
  label: `${prog.title} (${prog.sampleDuration})`,
}));

export const TRIAL_OPTIONS: InterestOption[] = [
  {
    id: "welcome-orientation",
    label: "45-Minute Welcome Orientation & Club Tour",
  },
  {
    id: "small-group-trial",
    label: "Small-Group Training Trial Cohort (Max 8)",
  },
  {
    id: "mobility-trial",
    label: "Mobility & Recovery Studio Trial Session",
  },
];

export const GENERAL_OPTIONS: InterestOption[] = [
  {
    id: "general-club",
    label: "General Club Amenities & Concept Question",
  },
  {
    id: "operating-hours",
    label: "Sample Schedule & Access Hours",
  },
  {
    id: "concept-inquiry",
    label: "Portfolio Design & Architecture Inquiries",
  },
];

export function getInterestOptions(type: InquiryType): InterestOption[] {
  switch (type) {
    case "membership":
      return MEMBERSHIP_OPTIONS;
    case "program":
      return PROGRAM_OPTIONS;
    case "trial":
      return TRIAL_OPTIONS;
    case "general":
      return GENERAL_OPTIONS;
  }
}

export function validateFullName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return "Please enter your full name.";
  }
  if (trimmed.length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (trimmed.length > 100) {
    return "Name must be 100 characters or fewer.";
  }
  const namePattern = /^[\p{L}\p{M}'’\-\s]{2,100}$/u;
  if (!namePattern.test(trimmed)) {
    return "Please enter a valid name containing only letters, spaces, hyphens, or apostrophes.";
  }
  return undefined;
}

export function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return "Please enter your email address.";
  }
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailPattern.test(trimmed)) {
    return "Please enter a valid email address (e.g., alex@example.com).";
  }
  return undefined;
}

export function validateMessage(value: string): string | undefined {
  if (value.length > 1000) {
    return "Message must be 1,000 characters or fewer.";
  }
  return undefined;
}

export function validateInquiryField(
  field: keyof FormErrors,
  value: string,
  selectedCountry: CountryCode = "US"
): string | undefined {
  switch (field) {
    case "fullName":
      return validateFullName(value);
    case "email":
      return validateEmail(value);
    case "phone":
      return validateInternationalPhoneNumber(value, selectedCountry).error;
    case "selectedInterest":
      return value ? undefined : "Please select a topic or program.";
    case "message":
      return validateMessage(value);
  }
}

export function validateInquiryForm(
  values: {
    fullName: string;
    email: string;
    phone: string;
    selectedInterest: string;
    message: string;
  },
  selectedCountry: CountryCode = "US"
): FormErrors {
  const nextErrors: FormErrors = {};
  const fields: Array<keyof FormErrors> = [
    "fullName",
    "email",
    "phone",
    "selectedInterest",
    "message",
  ];

  for (const field of fields) {
    const error = validateInquiryField(field, values[field], selectedCountry);
    if (error) {
      nextErrors[field] = error;
    }
  }

  return nextErrors;
}

export function resolveInitialType(param: string | null): InquiryType {
  if (
    param === "membership" ||
    param === "trial" ||
    param === "program" ||
    param === "general"
  ) {
    return param;
  }
  return "membership";
}

export function resolveInitialInterest(
  type: InquiryType,
  interestParam: string | null
): string {
  if (interestParam) {
    const validTier = MEMBERSHIP_TIERS.some((t) => t.id === interestParam);
    const validProgram = PROGRAMS.some((p) => p.id === interestParam);
    if (validTier || validProgram) {
      return interestParam;
    }
  }
  if (type === "membership") return "all-round";
  if (type === "program") return "strength-conditioning";
  if (type === "trial") return "welcome-orientation";
  return "general-club";
}

export function resolveInitialBilling(param: string | null): BillingPreference {
  return param === "yearly" ? "yearly" : "monthly";
}
