import { CountryCode, getCountries, getCountryCallingCode } from "libphonenumber-js/max";

export interface CountryOption {
  code: CountryCode;
  name: string;
  callingCode: string;
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

// All countries and territories supported by libphonenumber-js
export const ALL_COUNTRIES: CountryOption[] = getCountries()
  .map((code) => {
    let name: string = code;
    try {
      name = regionNames.of(code) || code;
    } catch {
      name = code;
    }
    return {
      code,
      name,
      callingCode: `+${getCountryCallingCode(code)}`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Frequently selected regions for convenience at the top of the selector
export const POPULAR_COUNTRY_CODES: CountryCode[] = [
  "US", // United States (+1)
  "IN", // India (+91)
  "GB", // United Kingdom (+44)
  "CA", // Canada (+1)
  "AU", // Australia (+61)
  "DE", // Germany (+49)
];

export const POPULAR_COUNTRIES: CountryOption[] = POPULAR_COUNTRY_CODES.map(
  (code) => {
    const found = ALL_COUNTRIES.find((c) => c.code === code);
    if (found) return found;
    return {
      code,
      name: regionNames.of(code) || code,
      callingCode: `+${getCountryCallingCode(code)}`,
    };
  }
);

const countryMap = new Map<CountryCode, CountryOption>(
  ALL_COUNTRIES.map((c) => [c.code, c])
);

export function getCountryByCode(code: CountryCode): CountryOption {
  return (
    countryMap.get(code) || {
      code,
      name: code,
      callingCode: `+${getCountryCallingCode(code)}`,
    }
  );
}

/**
 * Returns an authentic illustrative national-format placeholder hint for the given country.
 */
export function getSamplePlaceholder(code: CountryCode): string {
  switch (code) {
    case "US":
      return "(213) 373-4253";
    case "IN":
      return "98765 43210";
    case "GB":
      return "07911 123456";
    case "DE":
      return "030 12345678";
    case "AU":
      return "0412 345 678";
    case "CA":
      return "(416) 555-0123";
    default:
      try {
        return `+${getCountryCallingCode(code)} ...`;
      } catch {
        return "+1 (555) 000-0000";
      }
  }
}
