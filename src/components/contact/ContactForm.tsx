"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CountryCode } from "libphonenumber-js/max";
import {
  ALL_COUNTRIES,
  POPULAR_COUNTRIES,
  getSamplePlaceholder,
} from "@/components/contact/countries";
import {
  type BillingPreference,
  type FormErrors,
  type InquiryType,
  getInterestOptions,
  resolveInitialBilling,
  resolveInitialInterest,
  resolveInitialType,
  validateInquiryField,
  validateInquiryForm,
} from "@/components/contact/contactValidation";

const INTEREST_LABELS: Record<InquiryType, string> = {
  membership: "Selected Membership Plan",
  program: "Selected Training Program",
  trial: "Trial Session Preference",
  general: "Topic of Interest",
};

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
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("US");
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

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const updateFieldError = (
    field: keyof FormErrors,
    value: string,
    country: CountryCode = selectedCountry
  ) => {
    const err = validateInquiryField(field, value, country);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleInquiryTypeChange = (newType: InquiryType) => {
    setInquiryType(newType);
    const options = getInterestOptions(newType);
    const currentIsValid = options.some((opt) => opt.id === selectedInterest);
    if (!currentIsValid) {
      setSelectedInterest(options[0]?.id || "");
    }
  };

  // Preserve typed phone text when changing country so users do not lose partial input
  const handleCountryChange = (newCountry: CountryCode) => {
    setSelectedCountry(newCountry);
    if (touched.phone && phone.trim()) {
      updateFieldError("phone", phone, newCountry);
    }
  };

  const handleBlur = (field: keyof FormErrors, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    updateFieldError(field, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      selectedInterest: true,
      message: true,
    });

    const validationErrors = validateInquiryForm(
      { fullName, email, phone, selectedInterest, message },
      selectedCountry
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);

      const orderedRefs: Array<
        [keyof FormErrors, React.RefObject<HTMLElement | null>]
      > = [
        ["fullName", fullNameRef],
        ["email", emailRef],
        ["phone", phoneRef],
        ["selectedInterest", interestRef],
        ["message", messageRef],
      ];

      for (const [field, ref] of orderedRefs) {
        if (validationErrors[field]) {
          ref.current?.focus();
          break;
        }
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Client-side simulation only (no network requests or storage)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 150);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setSelectedCountry("US");
    setInquiryType(initialType);
    setSelectedInterest(initialInterest);
    setBillingPreference(initialBilling);
    setMessage("");
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const currentOptions = getInterestOptions(inquiryType);
  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <div className="border border-graphite/15 bg-ivory-muted p-6 sm:p-10">
      <div className="mb-8 border border-forest/20 bg-forest/5 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-forest" />
          <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest uppercase">
            Portfolio Demonstration
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-graphite-soft sm:text-sm">
          This is a demonstration inquiry form. Please use sample details. Your
          entries are validated in your browser and are not sent or saved.
        </p>
      </div>

      {isSubmitted ? (
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
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
            Demo submission only — your information was validated in your
            browser and was not sent or saved.
          </p>

          <p className="mt-3 text-xs leading-relaxed text-graphite-soft sm:text-sm">
            Thank you for exploring the AMIT ATHLETIC CLUB digital experience.
          </p>

          <div className="mt-8 pt-6 border-t border-graphite/15">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[48px] items-center justify-center bg-forest px-7 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-deep focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
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
                  updateFieldError("fullName", e.target.value);
                }
              }}
              onBlur={() => handleBlur("fullName", fullName)}
              placeholder="Alex Morgan"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? "contact-full-name-error" : undefined
              }
              className={`mt-2 h-12 w-full border bg-ivory px-4 text-sm text-graphite placeholder:text-graphite-soft/60 focus:outline-none ${
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
                    updateFieldError("email", e.target.value);
                  }
                }}
                onBlur={() => handleBlur("email", email)}
                placeholder="alex@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={`mt-2 h-12 w-full border bg-ivory px-4 text-sm text-graphite placeholder:text-graphite-soft/60 focus:outline-none ${
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-phone"
                  className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
                >
                  Phone Number <span className="text-forest">*</span>
                </label>
                <span className="font-mono text-[10px] tracking-[0.14em] text-graphite-soft uppercase">
                  International Support
                </span>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-12 gap-2">
                <div className="sm:col-span-5">
                  <label htmlFor="contact-country" className="sr-only">
                    Select Country or Region Code
                  </label>
                  <select
                    id="contact-country"
                    name="country"
                    value={selectedCountry}
                    onChange={(e) =>
                      handleCountryChange(e.target.value as CountryCode)
                    }
                    aria-label="Country or Region Code"
                    className="h-12 w-full border border-graphite/25 bg-ivory px-3 text-xs sm:text-sm text-graphite focus:border-forest focus:outline-none"
                  >
                    <optgroup label="Popular Countries">
                      {POPULAR_COUNTRIES.map((c) => (
                        <option key={`pop-${c.code}`} value={c.code}>
                          {c.name} ({c.callingCode})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="All Countries & Territories">
                      {ALL_COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name} ({c.callingCode})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="sm:col-span-7">
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
                        updateFieldError("phone", e.target.value);
                      }
                    }}
                    onBlur={() => handleBlur("phone", phone)}
                    placeholder={getSamplePlaceholder(selectedCountry)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? "contact-phone-error" : undefined
                    }
                    className={`h-12 w-full border bg-ivory px-4 text-sm text-graphite placeholder:text-graphite-soft/60 focus:outline-none ${
                      errors.phone
                        ? "border-red-700 focus:border-red-800"
                        : "border-graphite/25 focus:border-forest"
                    }`}
                  />
                </div>
              </div>

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
              <option value="trial">Free Trial &amp; Orientation</option>
              <option value="program">Training Program Details</option>
              <option value="general">General Inquiries</option>
            </select>
          </div>

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
                {INTEREST_LABELS[inquiryType]}{" "}
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
                    setErrors((prev) => ({
                      ...prev,
                      selectedInterest: undefined,
                    }));
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

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                Optional Message or Training Goals
              </label>
              <span className="font-mono text-[10px] text-graphite-soft">
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
                  updateFieldError("message", e.target.value);
                }
              }}
              onBlur={() => handleBlur("message", message)}
              placeholder="Tell us about your fitness background, preferred schedule, or any specific questions..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className={`mt-2 w-full border bg-ivory p-4 text-sm text-graphite placeholder:text-graphite-soft/60 focus:outline-none ${
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

          <div className="flex flex-col justify-between gap-4 border-t border-graphite/15 pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[11px] tracking-[0.12em] text-graphite-soft uppercase">
              * Required fields · Browser validation only
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[48px] items-center justify-center bg-forest px-8 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-deep focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:opacity-60"
            >
              {isSubmitting ? "Validating..." : "Submit Inquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
