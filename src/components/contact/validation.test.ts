import assert from "node:assert";
import {
  validateFullName,
  validateEmail,
  validateUsPhoneNumber,
  validateMessage,
  resolveInitialType,
  resolveInitialInterest,
  resolveInitialBilling,
} from "./ContactForm";
import {
  MEMBERSHIP_TIERS,
  calculateAnnualDiscount,
  ANNUAL_DISCOUNT_PERCENT,
} from "../../data/siteContent";

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

// 3. US Phone Number Tests (NANP compliant)
{
  // Valid formats
  const res1 = validateUsPhoneNumber("(303) 555-0123");
  assert.strictEqual(res1.error, undefined);
  assert.strictEqual(res1.formatted, "(303) 555-0123");

  const res2 = validateUsPhoneNumber("303-555-0123");
  assert.strictEqual(res2.error, undefined);
  assert.strictEqual(res2.formatted, "(303) 555-0123");

  const res3 = validateUsPhoneNumber("+1 303 555 0123");
  assert.strictEqual(res3.error, undefined);
  assert.strictEqual(res3.formatted, "(303) 555-0123");

  const res4 = validateUsPhoneNumber("3035550123");
  assert.strictEqual(res4.error, undefined);
  assert.strictEqual(res4.formatted, "(303) 555-0123");

  const res5 = validateUsPhoneNumber("720.555.9876");
  assert.strictEqual(res5.error, undefined);
  assert.strictEqual(res5.formatted, "(720) 555-9876");

  // Invalid formats
  assert.ok(validateUsPhoneNumber("").error !== undefined, "Empty phone should fail");
  assert.ok(validateUsPhoneNumber("   ").error !== undefined, "Whitespace phone should fail");
  assert.ok(validateUsPhoneNumber("12345").error !== undefined, "Short phone should fail");
  assert.ok(
    validateUsPhoneNumber("303555012345").error !== undefined,
    "Long phone should fail"
  );
  assert.ok(
    validateUsPhoneNumber("abcdefghij").error !== undefined,
    "Non-digit phone should fail"
  );

  // NANP rule: Area code cannot start with 0 or 1
  assert.ok(
    validateUsPhoneNumber("(012) 555-0123").error?.includes("0 or 1"),
    "Area code starting with 0 should fail"
  );
  assert.ok(
    validateUsPhoneNumber("(123) 456-7890").error?.includes("0 or 1"),
    "Area code starting with 1 should fail"
  );

  // NANP rule: Exchange code cannot start with 0 or 1
  assert.ok(
    validateUsPhoneNumber("(303) 055-0123").error?.includes("0 or 1"),
    "Exchange code starting with 0 should fail"
  );
  assert.ok(
    validateUsPhoneNumber("(303) 155-0123").error?.includes("0 or 1"),
    "Exchange code starting with 1 should fail"
  );

  // Repeated digit pattern rejection
  assert.ok(
    validateUsPhoneNumber("0000000000").error !== undefined,
    "All 0s should fail"
  );
  assert.ok(
    validateUsPhoneNumber("5555555555").error !== undefined,
    "All 5s should fail"
  );
}
console.log("✓ Phone Number validation passed");

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

console.log("\nAll automated regression and unit tests passed successfully!");
