import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js/max";

export interface CountryOption {
  code: CountryCode;
  name: string;
  callingCode: string;
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

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

export const POPULAR_COUNTRY_CODES: CountryCode[] = [
  "US",
  "IN",
  "GB",
  "CA",
  "AU",
  "DE",
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
