"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { MEMBERSHIP_TIERS, PROGRAMS } from "@/data/siteContent";

export type InquiryType = "membership" | "trial" | "program" | "general";
export type BillingPreference = "monthly" | "yearly";

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  selectedInterest?: string;
  message?: string;
}

interface InterestOption {
  id: string;
  label: string;
}

const MEMBERSHIP_OPTIONS: InterestOption[] = MEMBERSHIP_TIERS.map((tier) => ({
  id: tier.id,
  label: `${tier.name} ($${tier.monthlyPriceUsd}/mo standard · $${tier.effectiveAnnualMonthlyUsd}/mo yearly)`,
}));

const PROGRAM_OPTIONS: InterestOption[] = PROGRAMS.map((prog) => ({
  id: prog.id,
  label: `${prog.title} (${prog.sampleDuration})`,
}));

const TRIAL_OPTIONS: InterestOption[] = [
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

const GENERAL_OPTIONS: InterestOption[] = [
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

/**
 * Validates full name:
 * - Trimmed, non-empty, min 2 chars, max 100 chars
 * - Supports letters (including unicode letters/accents), spaces, hyphens, and apostrophes
 */
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

/**
 * Validates email address with standard RFC pattern
 */
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

/**
 * Validates US phone numbers according to North American Numbering Plan (NANP):
 * - Accepts 10 digits, or 11 digits starting with 1
 * - Area code cannot begin with 0 or 1
 * - Exchange code cannot begin with 0 or 1
 * - Rejects repeated digit patterns (e.g., 0000000000, 1111111111)
 */
export function validateUsPhoneNumber(value: string): {
  error?: string;
  formatted?: string;
} {
  const trimmed = value.trim();
  if (!trimmed) {
    return { error: "Please enter your phone number." };
  }

  const digitsOnly = trimmed.replace(/\D/g, "");

  let tenDigits = digitsOnly;
  if (digitsOnly.length === 11 && digitsOnly.startsWith("1")) {
    tenDigits = digitsOnly.slice(1);
  }

  if (tenDigits.length !== 10) {
    return {
      error:
        "Please enter a valid 10-digit US phone number (e.g., (303) 555-0123).",
    };
  }

  const areaCode = tenDigits.slice(0, 3);
  const exchangeCode = tenDigits.slice(3, 6);
  const subscriberNumber = tenDigits.slice(6, 10);

  if (areaCode[0] === "0" || areaCode[0] === "1") {
    return {
      error: "US area codes cannot begin with 0 or 1.",
    };
  }

  if (exchangeCode[0] === "0" || exchangeCode[0] === "1") {
    return {
      error: "US phone number prefix cannot begin with 0 or 1.",
    };
  }

  if (/^(\d)\1{9}$/.test(tenDigits)) {
    return {
      error: "Please enter an active US phone number.",
    };
  }

  const formatted = `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
  return { formatted };
}

export function validateMessage(value: string): string | undefined {
  if (value.length > 1000) {
    return "Message must be 1,000 characters or fewer.";
  }
  return undefined;
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

export function ContactForm() {
  const searchParams = useSearchParams();
  const queryKey = searchParams.toString();

  const initialType = resolveInitialType(searchParams.get("type"));
  const initialInterest = resolveInitialInterest(
    initialType,
    searchParams.get("interest")
  );
  const initialBilling = resolveInitialBilling(searchParams.get("billing"));
  const sessionParam = searchParams.get("session");
  const initialMessage = sessionParam
    ? `Interested in learning more about the sample session: ${sessionParam}`
    : "";

  return (
    <ContactFormInner
      key={queryKey}
      initialType={initialType}
      initialInterest={initialInterest}
      initialBilling={initialBilling}
      initialMessage={initialMessage}
    />
  );
}

interface ContactFormInnerProps {
  initialType: InquiryType;
  initialInterest: string;
  initialBilling: BillingPreference;
  initialMessage: string;
}

function ContactFormInner({
  initialType,
  initialInterest,
  initialBilling,
  initialMessage,
}: ContactFormInnerProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>(initialType);
  const [selectedInterest, setSelectedInterest] =
    useState<string>(initialInterest);
  const [billingPreference, setBillingPreference] =
    useState<BillingPreference>(initialBilling);
  const [message, setMessage] = useState<string>(initialMessage);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Field refs for auto-focusing first invalid field
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const getOptionsForType = (type: InquiryType): InterestOption[] => {
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
  };

  const handleInquiryTypeChange = (newType: InquiryType) => {
    setInquiryType(newType);
    const options = getOptionsForType(newType);
    const currentIsValid = options.some((opt) => opt.id === selectedInterest);
    if (!currentIsValid) {
      setSelectedInterest(options[0]?.id || "");
    }
  };

  const validateAll = (): FormErrors => {
    const nextErrors: FormErrors = {};

    const nameErr = validateFullName(fullName);
    if (nameErr) nextErrors.fullName = nameErr;

    const emailErr = validateEmail(email);
    if (emailErr) nextErrors.email = emailErr;

    const phoneRes = validateUsPhoneNumber(phone);
    if (phoneRes.error) nextErrors.phone = phoneRes.error;

    if (!selectedInterest) {
      nextErrors.selectedInterest = "Please select a topic or program.";
    }

    const msgErr = validateMessage(message);
    if (msgErr) nextErrors.message = msgErr;

    return nextErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    if (field === "fullName") {
      const err = validateFullName(fullName);
      setErrors((prev) => ({ ...prev, fullName: err }));
    } else if (field === "email") {
      const err = validateEmail(email);
      setErrors((prev) => ({ ...prev, email: err }));
    } else if (field === "phone") {
      const res = validateUsPhoneNumber(phone);
      setErrors((prev) => ({ ...prev, phone: res.error }));
      if (res.formatted && !res.error) {
        setPhone(res.formatted);
      }
    } else if (field === "message") {
      const err = validateMessage(message);
      setErrors((prev) => ({ ...prev, message: err }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Mark all fields touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      selectedInterest: true,
      message: true,
    });

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);

      // Auto-focus first invalid field in DOM order
      if (validationErrors.fullName) {
        fullNameRef.current?.focus();
      } else if (validationErrors.email) {
        emailRef.current?.focus();
      } else if (validationErrors.phone) {
        phoneRef.current?.focus();
      } else if (validationErrors.selectedInterest) {
        interestRef.current?.focus();
      } else if (validationErrors.message) {
        messageRef.current?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Normalizing phone format on submission
    const phoneRes = validateUsPhoneNumber(phone);
    if (phoneRes.formatted) {
      setPhone(phoneRes.formatted);
    }

    // Client-side simulation submission (no network calls, no storage)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 150);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setInquiryType(initialType);
    setSelectedInterest(initialInterest);
    setBillingPreference(initialBilling);
    setMessage("");
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const currentOptions = getOptionsForType(inquiryType);
  const hasErrors = Object.keys(errors).some((key) => Boolean(errors[key as keyof FormErrors]));

  return (
    <div className="border border-graphite/15 bg-ivory-warm p-6 sm:p-10">
      {/* Discreet Portfolio Demo Notice */}
      <div className="mb-8 border border-forest/20 bg-forest/5 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-forest" />
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest uppercase">
            Portfolio Demonstration
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-graphite-muted sm:text-sm">
          This inquiry form is an interactive client-side prototype. Entries are validated locally in your browser and are neither transmitted nor stored.
        </p>
      </div>

      {isSubmitted ? (
        /* Truthful Success State — Privacy Preserved */
        <div
          role="status"
          aria-live="polite"
          className="border border-forest/40 bg-ivory p-7 sm:p-10"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-ivory">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
              Inquiry Validated
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-graphite sm:text-3xl">
            Form submitted successfully
          </h3>

          <p className="mt-3 text-sm font-medium text-graphite sm:text-base">
            Demo submission only — your information was validated in your browser and was not sent or saved.
          </p>

          <p className="mt-3 text-xs leading-relaxed text-graphite-muted sm:text-sm">
            Thank you for exploring the AMIT ATHLETIC CLUB digital experience.
          </p>

          <div className="mt-8 pt-6 border-t border-graphite/15">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[48px] items-center justify-center bg-forest px-7 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {hasErrors && (
            <div
              role="alert"
              className="border border-red-800/40 bg-red-950/5 p-4 text-sm text-red-900"
            >
              <p className="font-semibold">
                Please correct the errors in the form before submitting:
              </p>
              <ul className="mt-1.5 list-inside list-disc space-y-1 text-xs">
                {errors.fullName && <li>{errors.fullName}</li>}
                {errors.email && <li>{errors.email}</li>}
                {errors.phone && <li>{errors.phone}</li>}
                {errors.selectedInterest && <li>{errors.selectedInterest}</li>}
                {errors.message && <li>{errors.message}</li>}
              </ul>
            </div>
          )}

          {/* 1. Full Name */}
          <div>
            <label
              htmlFor="contact-full-name"
              className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
            >
              Full Name <span className="text-forest">*</span>
            </label>
            <input
              ref={fullNameRef}
              id="contact-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (touched.fullName) {
                  const err = validateFullName(e.target.value);
                  setErrors((prev) => ({ ...prev, fullName: err }));
                }
              }}
              onBlur={() => handleBlur("fullName")}
              placeholder="Alex Morgan"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? "contact-full-name-error" : undefined
              }
              className={`mt-2 h-12 w-full border bg-ivory px-4 text-sm text-graphite placeholder:text-graphite-muted/50 focus:outline-none ${
                errors.fullName
                  ? "border-red-700 focus:border-red-800"
                  : "border-graphite/25 focus:border-forest"
              }`}
            />
            {errors.fullName && (
              <p
                id="contact-full-name-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-800"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          {/* 2 & 3. Email Address & Phone Number */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-email"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                Email Address <span className="text-forest">*</span>
              </label>
              <input
                ref={emailRef}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (touched.email) {
                    const err = validateEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: err }));
                  }
                }}
                onBlur={() => handleBlur("email")}
                placeholder="alex@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={`mt-2 h-12 w-full border bg-ivory px-4 text-sm text-graphite placeholder:text-graphite-muted/50 focus:outline-none ${
                  errors.email
                    ? "border-red-700 focus:border-red-800"
                    : "border-graphite/25 focus:border-forest"
                }`}
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-800"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                Phone Number <span className="text-forest">*</span>
              </label>
              <input
                ref={phoneRef}
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (touched.phone) {
                    const res = validateUsPhoneNumber(e.target.value);
                    setErrors((prev) => ({ ...prev, phone: res.error }));
                  }
                }}
                onBlur={() => handleBlur("phone")}
                placeholder="(303) 555-0123"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={
                  errors.phone ? "contact-phone-error" : undefined
                }
                className={`mt-2 h-12 w-full border bg-ivory px-4 text-sm text-graphite placeholder:text-graphite-muted/50 focus:outline-none ${
                  errors.phone
                    ? "border-red-700 focus:border-red-800"
                    : "border-graphite/25 focus:border-forest"
                }`}
              />
              {errors.phone && (
                <p
                  id="contact-phone-error"
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-800"
                >
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* 4. Inquiry Type */}
          <div>
            <label
              htmlFor="contact-inquiry-type"
              className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
            >
              Inquiry Type <span className="text-forest">*</span>
            </label>
            <select
              id="contact-inquiry-type"
              name="inquiryType"
              value={inquiryType}
              onChange={(e) =>
                handleInquiryTypeChange(e.target.value as InquiryType)
              }
              className="mt-2 h-12 w-full border border-graphite/25 bg-ivory px-4 text-sm text-graphite focus:border-forest focus:outline-none"
            >
              <option value="membership">Membership Inquiries</option>
              <option value="trial">Free Trial & Orientation</option>
              <option value="program">Training Program Details</option>
              <option value="general">General Inquiries</option>
            </select>
          </div>

          {/* 5. Relevant Membership or Program Interest (and Dynamic Billing Preference) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div
              className={
                inquiryType === "membership" ? "sm:col-span-1" : "sm:col-span-2"
              }
            >
              <label
                htmlFor="contact-interest"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                {inquiryType === "membership"
                  ? "Selected Membership Plan"
                  : inquiryType === "program"
                    ? "Selected Training Program"
                    : inquiryType === "trial"
                      ? "Trial Session Preference"
                      : "Topic of Interest"}{" "}
                <span className="text-forest">*</span>
              </label>
              <select
                ref={interestRef}
                id="contact-interest"
                name="selectedInterest"
                value={selectedInterest}
                onChange={(e) => {
                  setSelectedInterest(e.target.value);
                  if (errors.selectedInterest) {
                    setErrors((prev) => ({ ...prev, selectedInterest: undefined }));
                  }
                }}
                className="mt-2 h-12 w-full border border-graphite/25 bg-ivory px-4 text-sm text-graphite focus:border-forest focus:outline-none"
              >
                {currentOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Billing Preference — only shown for Membership inquiries */}
            {inquiryType === "membership" && (
              <div>
                <span className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase">
                  Billing Preference
                </span>
                <div
                  role="group"
                  aria-label="Billing preference"
                  className="mt-2 grid h-12 grid-cols-2 gap-2"
                >
                  <button
                    type="button"
                    aria-pressed={billingPreference === "monthly"}
                    onClick={() => setBillingPreference("monthly")}
                    className={`border text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      billingPreference === "monthly"
                        ? "border-graphite bg-graphite text-ivory"
                        : "border-graphite/25 bg-ivory text-graphite hover:border-graphite"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    aria-pressed={billingPreference === "yearly"}
                    onClick={() => setBillingPreference("yearly")}
                    className={`border text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      billingPreference === "yearly"
                        ? "border-forest bg-forest text-ivory"
                        : "border-graphite/25 bg-ivory text-graphite hover:border-graphite"
                    }`}
                  >
                    Yearly (Save 20%)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 6. Optional Message or Training Goals */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                Optional Message or Training Goals
              </label>
              <span className="font-mono text-[10px] text-graphite-muted">
                {message.length} / 1,000
              </span>
            </div>
            <textarea
              ref={messageRef}
              id="contact-message"
              name="message"
              rows={4}
              maxLength={1000}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (touched.message) {
                  const err = validateMessage(e.target.value);
                  setErrors((prev) => ({ ...prev, message: err }));
                }
              }}
              onBlur={() => handleBlur("message")}
              placeholder="Tell us about your fitness background, preferred schedule, or any specific questions..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className={`mt-2 w-full border bg-ivory p-4 text-sm text-graphite placeholder:text-graphite-muted/50 focus:outline-none ${
                errors.message
                  ? "border-red-700 focus:border-red-800"
                  : "border-graphite/25 focus:border-forest"
              }`}
            />
            {errors.message && (
              <p
                id="contact-message-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-800"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* 7. Submit Button */}
          <div className="flex flex-col justify-between gap-4 border-t border-graphite/15 pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[11px] tracking-[0.12em] text-graphite-muted uppercase">
              * Required fields · Browser validation only
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[48px] items-center justify-center bg-forest px-8 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:opacity-60"
            >
              {isSubmitting ? "Validating..." : "Submit Inquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
