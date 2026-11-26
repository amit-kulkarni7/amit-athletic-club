import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MembershipsInteractive } from "./MembershipsInteractive";
import {
  MEMBERSHIP_TIERS,
  calculateAnnualDiscount,
} from "@/data/siteContent";

describe("MembershipsInteractive", () => {
  it("displays authoritative monthly rates and switches to 20% annual rates across cards and comparisons", async () => {
    const user = userEvent.setup();
    render(<MembershipsInteractive />);

    const monthlyButton = screen.getByRole("button", {
      name: /monthly billing/i,
    });
    const yearlyButton = screen.getByRole("button", {
      name: /yearly billing/i,
    });

    expect(monthlyButton.getAttribute("aria-pressed")).toBe("true");
    expect(yearlyButton.getAttribute("aria-pressed")).toBe("false");

    const table = screen.getByRole("table");
    const mobileComparison = screen.getByLabelText(
      /mobile membership feature comparison/i
    );

    // Verify monthly pricing across cards, desktop table, and mobile comparison
    for (const tier of MEMBERSHIP_TIERS) {
      expect(
        screen.getAllByText(`$${tier.monthlyPriceUsd}`).length
      ).toBeGreaterThanOrEqual(1);
      expect(
        within(table).getByText(`$${tier.monthlyPriceUsd}/mo`)
      ).toBeTruthy();
      expect(
        within(mobileComparison).getAllByText(
          `${tier.name} ($${tier.monthlyPriceUsd}/mo)`
        ).length
      ).toBeGreaterThan(0);

      const cta = screen.getByRole("link", {
        name: new RegExp(`${tier.ctaLabel}.*Monthly`, "i"),
      });
      expect(cta.getAttribute("href")).toBe(
        `/contact?type=membership&interest=${tier.id}&billing=monthly`
      );
    }

    // Switch to Yearly Billing
    await user.click(yearlyButton);
    expect(yearlyButton.getAttribute("aria-pressed")).toBe("true");
    expect(monthlyButton.getAttribute("aria-pressed")).toBe("false");

    for (const tier of MEMBERSHIP_TIERS) {
      const calc = calculateAnnualDiscount(
        tier.monthlyPriceUsd,
        tier.annualDiscountPercent
      );

      expect(
        screen.getAllByText(`$${calc.effectiveMonthlyRate}`).length
      ).toBeGreaterThanOrEqual(1);
      expect(
        screen.getByText(new RegExp(`Save \\$${calc.annualSavings}/yr`))
      ).toBeTruthy();
      expect(
        within(table).getByText(`$${calc.effectiveMonthlyRate}/mo`)
      ).toBeTruthy();
      expect(
        within(mobileComparison).getAllByText(
          `${tier.name} ($${calc.effectiveMonthlyRate}/mo)`
        ).length
      ).toBeGreaterThan(0);

      const cta = screen.getByRole("link", {
        name: new RegExp(`${tier.ctaLabel}.*Yearly`, "i"),
      });
      expect(cta.getAttribute("href")).toBe(
        `/contact?type=membership&interest=${tier.id}&billing=yearly`
      );
    }
  });
});
