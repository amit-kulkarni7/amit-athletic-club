"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MEMBERSHIP_TIERS, PROGRAMS } from "@/data/siteContent";

export type InquiryType = "membership" | "trial" | "program" | "general";
export type BillingPreference = "monthly" | "yearly";

interface FormErrors {
  fullName?: string;
  email?: string;
  inquiryType?: string;
  selectedInterest?: string;
}

const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  membership: "Membership Inquiry",
  trial: "Free-Trial / Orientation Interest",
  program: "Program Question",
  general: "General Question",
};

function resolveInitialType(param: string | null): InquiryType {
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

function resolveInitialInterest(
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

function resolveInitialBilling(param: string | null): BillingPreference {
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
  const [inquiryType, setInquiryType] = useState<InquiryType>(initialType);
  const [selectedInterest, setSelectedInterest] =
    useState<string>(initialInterest);
  const [billingPreference, setBillingPreference] =
    useState<BillingPreference>(initialBilling);
  const [message, setMessage] = useState<string>(initialMessage);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquiryTypeChange = (newType: InquiryType) => {
    setInquiryType(newType);
    if (newType === "membership") {
      const isTier = MEMBERSHIP_TIERS.some((t) => t.id === selectedInterest);
      if (!isTier) setSelectedInterest("all-round");
    } else if (newType === "program") {
      const isProg = PROGRAMS.some((p) => p.id === selectedInterest);
      if (!isProg) setSelectedInterest("strength-conditioning");
    } else if (newType === "trial") {
      setSelectedInterest("welcome-orientation");
    } else {
      setSelectedInterest("general-club");
    }
  };

  const validateForm = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      nextErrors.fullName = "Please enter your name to validate the demo form.";
    } else if (trimmedName.length < 2) {
      nextErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email =
        "Please enter a valid email address (for example, alex@example.com).";
    }

    if (!selectedInterest) {
      nextErrors.selectedInterest =
        "Please select a membership plan or program topic.";
    }

    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleResetDemo = () => {
    setFullName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setIsSubmitted(false);
  };

  const getInterestLabel = (val: string): string => {
    const tier = MEMBERSHIP_TIERS.find((t) => t.id === val);
    if (tier)
      return `${tier.name} ($${billingPreference === "yearly" ? tier.effectiveAnnualMonthlyUsd : tier.monthlyPriceUsd}/mo)`;
    const prog = PROGRAMS.find((p) => p.id === val);
    if (prog) return prog.title;
    if (val === "welcome-orientation")
      return "45-Minute Welcome Orientation & Club Tour";
    return "General Club & Concept Question";
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="border border-graphite/15 bg-ivory-warm p-6 sm:p-10">
      {/* Frontend Simulation Disclosure Banner */}
      <div className="mb-8 border border-forest/30 bg-forest/5 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-forest" />
          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">
            FRONTEND SIMULATION DISCLOSURE
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-graphite sm:text-sm">
          This inquiry form is an interactive client-side demonstration created
          for the AMIT ATHLETIC CLUB portfolio project. Submissions are
          validated locally in your browser—no personal data is transmitted,
          stored, or sent to any server.
        </p>
      </div>

      {isSubmitted ? (
        /* Truthful Confirmation State */
        <div
          role="status"
          aria-live="polite"
          className="border border-forest bg-ivory p-7 sm:p-10"
        >
          <div className="flex items-center justify-between border-b border-graphite/15 pb-4">
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
              VALIDATION COMPLETE · CLIENT-SIDE DEMO
            </span>
            <span className="bg-forest px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-ivory uppercase">
              NO DATA SENT
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-graphite sm:text-3xl">
            Demo completed. Your form was validated successfully. No information
            was sent or stored.
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-graphite-muted sm:text-base">
            Because AMIT ATHLETIC CLUB is a fictional portfolio concept, this
            form performs real-time frontend validation without transmitting
            your entries over the network.
          </p>

          <dl className="mt-7 grid grid-cols-1 gap-4 border-t border-b border-graphite/15 py-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                VALIDATED NAME
              </dt>
              <dd className="mt-1 font-medium text-graphite">{fullName}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                VALIDATED EMAIL
              </dt>
              <dd className="mt-1 font-medium text-graphite">{email}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                INQUIRY TYPE
              </dt>
              <dd className="mt-1 font-medium text-graphite">
                {INQUIRY_TYPE_LABELS[inquiryType]}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                SELECTED TOPIC / PLAN
              </dt>
              <dd className="mt-1 font-medium text-graphite">
                {getInterestLabel(selectedInterest)}
              </dd>
            </div>
            {inquiryType === "membership" && (
              <div>
                <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                  BILLING PREFERENCE
                </dt>
                <dd className="mt-1 font-medium text-graphite capitalize">
                  {billingPreference} Billing
                </dd>
              </div>
            )}
            {message.trim() && (
              <div className="sm:col-span-2">
                <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                  MESSAGE NOTE
                </dt>
                <dd className="mt-1 text-graphite-muted">{message}</dd>
              </div>
            )}
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleResetDemo}
              className="inline-flex h-11 items-center justify-center bg-forest px-6 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light"
            >
              Test Another Demo Inquiry
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
                Please review the highlighted fields below:
              </p>
              <ul className="mt-1.5 list-inside list-disc space-y-1 text-xs">
                {errors.fullName && <li>{errors.fullName}</li>}
                {errors.email && <li>{errors.email}</li>}
                {errors.selectedInterest && <li>{errors.selectedInterest}</li>}
              </ul>
            </div>
          )}

          {/* Name & Email */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-full-name"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                Full Name <span className="text-forest">*</span>
              </label>
              <input
                id="contact-full-name"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) {
                    setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }
                }}
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
                  className="mt-1.5 text-xs font-medium text-red-800"
                >
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
              >
                Email Address <span className="text-forest">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
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
                  className="mt-1.5 text-xs font-medium text-red-800"
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Inquiry Type Selector */}
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
              <option value="membership">Membership inquiry</option>
              <option value="trial">Free-trial / orientation interest</option>
              <option value="program">Program question</option>
              <option value="general">General question</option>
            </select>
          </div>

          {/* Membership or Program Selector */}
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
                    : "Primary Topic of Interest"}
              </label>
              <select
                id="contact-interest"
                name="selectedInterest"
                value={selectedInterest}
                onChange={(e) => setSelectedInterest(e.target.value)}
                className="mt-2 h-12 w-full border border-graphite/25 bg-ivory px-4 text-sm text-graphite focus:border-forest focus:outline-none"
              >
                <optgroup label="Membership Plans">
                  {MEMBERSHIP_TIERS.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                      {tier.name} (${tier.monthlyPriceUsd}/mo monthly · $
                      {tier.effectiveAnnualMonthlyUsd}/mo yearly)
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Training Programs">
                  {PROGRAMS.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title} ({prog.sampleDuration})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Orientation & General">
                  <option value="welcome-orientation">
                    45-Minute Welcome Orientation & Club Tour
                  </option>
                  <option value="general-club">
                    General Club & Facility Concept Question
                  </option>
                </optgroup>
              </select>
            </div>

            {/* Billing Preference (shown when Membership Inquiry is selected) */}
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

          {/* Optional Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite uppercase"
            >
              Optional Message or Training Goals
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share any questions about equipment, class pacing, or your training goals..."
              className="mt-2 w-full border border-graphite/25 bg-ivory p-4 text-sm text-graphite placeholder:text-graphite-muted/50 focus:border-forest focus:outline-none"
            />
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-graphite/15 pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[11px] tracking-[0.12em] text-graphite-muted uppercase">
              * Required fields · Client-side validation only
            </p>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center bg-forest px-8 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light"
            >
              Validate Demo Inquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
