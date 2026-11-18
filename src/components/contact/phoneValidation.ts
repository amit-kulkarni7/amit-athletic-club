import { CountryCode, parsePhoneNumber } from "libphonenumber-js/max";

export interface PhoneValidationResult {
  error?: string;
  formatted?: string;
  e164?: string;
  country?: CountryCode;
  national?: string;
  international?: string;
}

export const PHONE_ERROR_INVALID =
  "Enter a valid phone number for the selected country, or include its international country code.";

/**
 * Validates international phone numbers using libphonenumber-js/max:
 * 1. Supports national-format phone numbers interpreted using the selected country.
 * 2. Supports fully international numbers beginning with "+", using their supplied country calling code
 *    regardless of the selected default country.
 * 3. Normalizes valid phone numbers internally to E.164 format.
 * 4. Rejects empty, incomplete, impossible length, invalid calling codes, and malformed prefixes.
 */
export function validateInternationalPhoneNumber(
  value: string,
  selectedCountry: CountryCode = "US"
): PhoneValidationResult {
  const trimmed = value.trim();
  if (!trimmed) {
    return { error: "Please enter your phone number." };
  }

  const digitsOnly = trimmed.replace(/\D/g, "");
  if (digitsOnly.length < 3) {
    return { error: PHONE_ERROR_INVALID };
  }

  try {
    const phoneNumber = trimmed.startsWith("+")
      ? parsePhoneNumber(trimmed)
      : parsePhoneNumber(trimmed, selectedCountry);

    if (!phoneNumber || !phoneNumber.isValid()) {
      return { error: PHONE_ERROR_INVALID };
    }

    return {
      e164: phoneNumber.number,
      formatted: phoneNumber.formatInternational(),
      national: phoneNumber.formatNational(),
      international: phoneNumber.formatInternational(),
      country: phoneNumber.country,
    };
  } catch {
    return { error: PHONE_ERROR_INVALID };
  }
}
