import assert from "node:assert";
import {
  validateFullName,
  validateEmail,
  validateUsPhoneNumber,
  validateInternationalPhoneNumber,
  validateMessage,
  resolveInitialType,
  resolveInitialInterest,
  resolveInitialBilling,
} from "./ContactForm";
import {
  MEMBERSHIP_TIERS,
  calculateAnnualDiscount,
  ANNUAL_DISCOUNT_PERCENT,
  ROUTE_EDITORIAL_MAP,
  getRouteEditorialMeta,
} from "../../data/siteContent";
import { ALL_COUNTRIES, POPULAR_COUNTRIES, getSamplePlaceholder } from "./countries";

console.log("Starting AMIT ATHLETIC CLUB automated test suite...");

// 1. Full Name Tests
{
  assert.strictEqual(validateFullName("Alex Morgan"), undefined);
  assert.strictEqual(validateFullName("Renée O'Connor"), undefined);
  assert.strictEqual(validateFullName("Jean-Luc Picard"), undefined);
  assert.strictEqual(validateFullName("Li Wei"), undefined);
  assert.strictEqual(validateFullName("Jo"), undefined); // 2 chars (min boundary)
  assert.strictEqual(validateFullName("A".repeat(100)), undefined); // 100 chars (max boundary)

  assert.ok(validateFullName("") !== undefined, "Empty name should fail");
  assert.ok(validateFullName("   ") !== undefined, "Whitespace name should fail");
  assert.ok(validateFullName("A") !== undefined, "Single character name should fail");
  assert.ok(
    validateFullName("Alex123") !== undefined,
    "Digits in name should fail"
  );
  assert.ok(
    validateFullName("Alex <script>") !== undefined,
    "Symbols in name should fail"
  );
  assert.ok(
    validateFullName("A".repeat(101)) !== undefined,
    "Names over 100 characters should fail"
  );
}
console.log("✓ Full Name validation passed");

// 2. Email Tests
{
  assert.strictEqual(validateEmail("alex@example.com"), undefined);
  assert.strictEqual(validateEmail("test.user+tag@sub.domain.co"), undefined);
  assert.strictEqual(validateEmail("ALEX@EXAMPLE.COM"), undefined);

  assert.ok(validateEmail("") !== undefined, "Empty email should fail");
  assert.ok(validateEmail("   ") !== undefined, "Whitespace email should fail");
  assert.ok(validateEmail("invalid-email") !== undefined, "No domain email should fail");
  assert.ok(validateEmail("alex@") !== undefined, "Missing domain should fail");
  assert.ok(validateEmail("@example.com") !== undefined, "Missing local part should fail");
  assert.ok(validateEmail("alex@example") !== undefined, "Missing TLD dot should fail");
}
console.log("✓ Email validation passed");

// 3. International Phone Number Validation Tests (libphonenumber-js/max)
{
  // A. Valid US numbers (national and international format)
  const usRes1 = validateInternationalPhoneNumber("(213) 373-4253", "US");
  assert.strictEqual(usRes1.error, undefined);
  assert.strictEqual(usRes1.e164, "+12133734253");
  assert.strictEqual(usRes1.country, "US");

  const usRes2 = validateInternationalPhoneNumber("+1 213 373 4253", "US");
  assert.strictEqual(usRes2.error, undefined);
  assert.strictEqual(usRes2.e164, "+12133734253");

  // B. Valid Indian numbers
  const inRes1 = validateInternationalPhoneNumber("98765 43210", "IN");
  assert.strictEqual(inRes1.error, undefined);
  assert.strictEqual(inRes1.e164, "+919876543210");
  assert.strictEqual(inRes1.country, "IN");

  const inRes2 = validateInternationalPhoneNumber("+91 98765 43210", "IN");
  assert.strictEqual(inRes2.error, undefined);
  assert.strictEqual(inRes2.e164, "+919876543210");

  // C. Valid UK numbers
  const ukRes1 = validateInternationalPhoneNumber("07911 123456", "GB");
  assert.strictEqual(ukRes1.error, undefined);
  assert.strictEqual(ukRes1.e164, "+447911123456");

  const ukRes2 = validateInternationalPhoneNumber("+44 7911 123456", "GB");
  assert.strictEqual(ukRes2.error, undefined);
  assert.strictEqual(ukRes2.e164, "+447911123456");

  // D. Valid German numbers
  const deRes1 = validateInternationalPhoneNumber("030 12345678", "DE");
  assert.strictEqual(deRes1.error, undefined);
  assert.strictEqual(deRes1.e164, "+493012345678");

  const deRes2 = validateInternationalPhoneNumber("+49 30 12345678", "DE");
  assert.strictEqual(deRes2.error, undefined);
  assert.strictEqual(deRes2.e164, "+493012345678");

  // E. Valid Australian numbers
  const auRes1 = validateInternationalPhoneNumber("0412 345 678", "AU");
  assert.strictEqual(auRes1.error, undefined);
  assert.strictEqual(auRes1.e164, "+61412345678");

  // F. Valid Canadian numbers (sharing calling code +1 with US)
  const caRes1 = validateInternationalPhoneNumber("(416) 555-0123", "CA");
  assert.strictEqual(caRes1.error, undefined);
  assert.strictEqual(caRes1.e164, "+14165550123");

  // G. Input starts with "+" differing from selected default country
  // User selected US (+1), but enters Indian (+91) or UK (+44) international number
  const crossCountryIn = validateInternationalPhoneNumber("+91 98765 43210", "US");
  assert.strictEqual(crossCountryIn.error, undefined);
  assert.strictEqual(crossCountryIn.e164, "+919876543210");
  assert.strictEqual(crossCountryIn.country, "IN");

  const crossCountryGb = validateInternationalPhoneNumber("+44 7911 123456", "US");
  assert.strictEqual(crossCountryGb.error, undefined);
  assert.strictEqual(crossCountryGb.e164, "+447911123456");

  // H. Country selection changes
  // A number valid in India should fail under US national parsing
  assert.ok(
    validateInternationalPhoneNumber("98765 43210", "US").error !== undefined,
    "Indian 10-digit mobile without country code should fail if US is selected"
  );
  assert.ok(
    validateInternationalPhoneNumber("98765 43210", "IN").error === undefined,
    "Indian 10-digit mobile should pass when IN is selected"
  );

  // I. Invalid and incomplete numbers
  assert.ok(
    validateInternationalPhoneNumber("", "US").error === "Please enter your phone number.",
    "Empty phone should prompt for phone number"
  );
  assert.ok(
    validateInternationalPhoneNumber("   ", "US").error === "Please enter your phone number.",
    "Whitespace phone should prompt for phone number"
  );
  assert.ok(
    validateInternationalPhoneNumber("123", "US").error !== undefined,
    "Incomplete number should fail"
  );
  assert.ok(
    validateInternationalPhoneNumber("+999 12345", "US").error !== undefined,
    "Invalid calling code should fail"
  );
  assert.ok(
    validateInternationalPhoneNumber("not-a-number", "US").error !== undefined,
    "Alphabetic text should fail"
  );
  assert.ok(
    validateInternationalPhoneNumber("0000000000", "US").error !== undefined,
    "Repeated zero digits should fail"
  );

  // J. Backward-compatible validateUsPhoneNumber wrapper
  const usCompat = validateUsPhoneNumber("(213) 373-4253");
  assert.strictEqual(usCompat.error, undefined);
  assert.strictEqual(usCompat.e164, "+12133734253");

  // K. Countries registry verification
  assert.ok(ALL_COUNTRIES.length >= 240, "All countries should include > 240 territories");
  assert.ok(POPULAR_COUNTRIES.length >= 6, "Popular countries should include >= 6 entries");
  assert.strictEqual(getSamplePlaceholder("US"), "(213) 373-4253");
  assert.strictEqual(getSamplePlaceholder("IN"), "98765 43210");
  assert.strictEqual(getSamplePlaceholder("GB"), "07911 123456");
  assert.strictEqual(getSamplePlaceholder("DE"), "030 12345678");
  assert.strictEqual(getSamplePlaceholder("AU"), "0412 345 678");
}
console.log("✓ International Phone Number validation passed");

// 4. Message Tests
{
  assert.strictEqual(validateMessage("Hello, I am interested in training."), undefined);
  assert.strictEqual(validateMessage(""), undefined); // Optional field
  assert.strictEqual(validateMessage("M".repeat(1000)), undefined); // Exactly 1000 chars

  assert.ok(
    validateMessage("M".repeat(1001)) !== undefined,
    "Messages over 1000 characters should fail"
  );
}
console.log("✓ Message validation passed");

// 5. Membership Pricing & Discount Calculation Tests
{
  assert.strictEqual(ANNUAL_DISCOUNT_PERCENT, 20);

  // Foundation Tier (195/mo standard)
  const foundationCalc = calculateAnnualDiscount(195, 20);
  assert.strictEqual(foundationCalc.effectiveMonthlyRate, 156);
  assert.strictEqual(foundationCalc.annualTotal, 1872);
  assert.strictEqual(foundationCalc.annualSavings, 468);

  // Club All-Round Tier (265/mo standard)
  const allRoundCalc = calculateAnnualDiscount(265, 20);
  assert.strictEqual(allRoundCalc.effectiveMonthlyRate, 212);
  assert.strictEqual(allRoundCalc.annualTotal, 2544);
  assert.strictEqual(allRoundCalc.annualSavings, 636);

  // Performance Tier (385/mo standard)
  const perfCalc = calculateAnnualDiscount(385, 20);
  assert.strictEqual(perfCalc.effectiveMonthlyRate, 308);
  assert.strictEqual(perfCalc.annualTotal, 3696);
  assert.strictEqual(perfCalc.annualSavings, 924);

  // Verify static siteContent MEMBERSHIP_TIERS data integrity matches pure calculations
  for (const tier of MEMBERSHIP_TIERS) {
    const calc = calculateAnnualDiscount(tier.monthlyPriceUsd, tier.annualDiscountPercent);
    assert.strictEqual(
      tier.effectiveAnnualMonthlyUsd,
      calc.effectiveMonthlyRate,
      `Tier ${tier.id} effective monthly rate mismatch`
    );
    assert.strictEqual(
      tier.annualTotalUsd,
      calc.annualTotal,
      `Tier ${tier.id} annual total mismatch`
    );
    assert.strictEqual(
      tier.annualSavingsUsd,
      calc.annualSavings,
      `Tier ${tier.id} annual savings mismatch`
    );
  }
}
console.log("✓ Membership pricing and annual discount math verified");

// 6. Inquiry URL Parameter Resolution Tests
{
  // resolveInitialType
  assert.strictEqual(resolveInitialType("membership"), "membership");
  assert.strictEqual(resolveInitialType("trial"), "trial");
  assert.strictEqual(resolveInitialType("program"), "program");
  assert.strictEqual(resolveInitialType("general"), "general");
  assert.strictEqual(resolveInitialType("invalid"), "membership");
  assert.strictEqual(resolveInitialType(null), "membership");
  assert.strictEqual(resolveInitialType("<script>"), "membership");

  // resolveInitialInterest
  assert.strictEqual(resolveInitialInterest("membership", "all-round"), "all-round");
  assert.strictEqual(resolveInitialInterest("membership", "foundation"), "foundation");
  assert.strictEqual(resolveInitialInterest("membership", "performance"), "performance");
  assert.strictEqual(resolveInitialInterest("membership", "invalid"), "all-round");
  assert.strictEqual(resolveInitialInterest("membership", null), "all-round");

  assert.strictEqual(
    resolveInitialInterest("program", "functional-training"),
    "functional-training"
  );
  assert.strictEqual(
    resolveInitialInterest("program", "nonexistent"),
    "strength-conditioning"
  );

  assert.strictEqual(resolveInitialInterest("trial", null), "welcome-orientation");
  assert.strictEqual(resolveInitialInterest("general", null), "general-club");

  // resolveInitialBilling
  assert.strictEqual(resolveInitialBilling("yearly"), "yearly");
  assert.strictEqual(resolveInitialBilling("monthly"), "monthly");
  assert.strictEqual(resolveInitialBilling("something-else"), "monthly");
  assert.strictEqual(resolveInitialBilling(null), "monthly");
}
console.log("✓ Inquiry URL parameter resolution verified");

// 7. Route-to-Number Dynamic Editorial Page Mapping Tests
{
  const expectedMappings = [
    { route: "/", number: "01", page: "Home", prefix: "01 /" },
    { route: "/about", number: "02", page: "About", prefix: "02 /" },
    { route: "/programs", number: "03", page: "Programs", prefix: "03 /" },
    { route: "/memberships", number: "04", page: "Memberships", prefix: "04 /" },
    { route: "/trainers", number: "05", page: "Trainers", prefix: "05 /" },
    { route: "/contact", number: "06", page: "Contact", prefix: "06 /" },
  ];

  for (const item of expectedMappings) {
    const meta = getRouteEditorialMeta(item.route);
    assert.strictEqual(
      meta.number,
      item.number,
      `Route ${item.route} must resolve to number ${item.number}`
    );
    assert.ok(
      meta.eyebrow.startsWith(item.prefix),
      `Route ${item.route} eyebrow '${meta.eyebrow}' must start with '${item.prefix}'`
    );
    assert.strictEqual(
      meta.pageTitle,
      item.page,
      `Route ${item.route} title must be '${item.page}'`
    );

    // Direct lookup in ROUTE_EDITORIAL_MAP
    assert.strictEqual(ROUTE_EDITORIAL_MAP[item.route].number, item.number);
  }

  // Edge cases
  assert.strictEqual(getRouteEditorialMeta("").number, "01");
  assert.strictEqual(getRouteEditorialMeta("/unknown-route").number, "01");
}
console.log("✓ Dynamic editorial route-to-number mapping verified for all 6 routes");

console.log("\nAll automated regression and unit tests passed successfully!");
