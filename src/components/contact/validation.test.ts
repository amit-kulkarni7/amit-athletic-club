import assert from "node:assert";
import {
  validateFullName,
  validateEmail,
  validateUsPhoneNumber,
  validateMessage,
} from "./ContactForm";

console.log("Starting contact form validation unit tests...");

// 1. Full Name Tests
{
  assert.strictEqual(validateFullName("Alex Morgan"), undefined);
  assert.strictEqual(validateFullName("Renée O'Connor"), undefined);
  assert.strictEqual(validateFullName("Jean-Luc Picard"), undefined);
  assert.strictEqual(validateFullName("Li Wei"), undefined);

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

  assert.ok(validateEmail("") !== undefined, "Empty email should fail");
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
  assert.ok(validateUsPhoneNumber("12345").error !== undefined, "Short phone should fail");
  assert.ok(
    validateUsPhoneNumber("303555012345").error !== undefined,
    "Long phone should fail"
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

console.log("All contact form validation unit tests passed successfully!");
