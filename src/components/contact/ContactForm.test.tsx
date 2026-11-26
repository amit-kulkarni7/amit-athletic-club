import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

let mockParams = new URLSearchParams();

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockParams,
}));

describe("ContactForm", () => {
  beforeEach(() => {
    mockParams = new URLSearchParams();
  });

  it("prefills from URL search params and displays the demonstration notice", () => {
    mockParams = new URLSearchParams(
      "type=membership&interest=foundation&billing=yearly"
    );
    render(<ContactForm />);

    expect(
      screen.getByText(/This is a demonstration inquiry form/i)
    ).toBeTruthy();
    expect(
      (screen.getByLabelText(/inquiry type/i) as HTMLSelectElement).value
    ).toBe("membership");
    expect(
      (screen.getByLabelText(/selected membership plan/i) as HTMLSelectElement)
        .value
    ).toBe("foundation");
    expect(
      screen
        .getByRole("button", { name: /yearly \(save 20%\)/i })
        .getAttribute("aria-pressed")
    ).toBe("true");
  });

  it("focuses the first invalid field, validates international phones while preserving typed input, submits, and resets", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Empty submit focuses Full Name
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));
    const nameInput = screen.getByLabelText(/full name/i);
    expect(document.activeElement).toBe(nameInput);
    expect(screen.getAllByRole("alert").length).toBeGreaterThanOrEqual(3);

    // Invalid email & phone show inline field alerts
    await user.type(nameInput, "Jordan Taylor");
    const emailInput = screen.getByLabelText(/email address/i);
    const phoneInput = screen.getByLabelText(/phone number/i);
    const countrySelect = screen.getByLabelText(/country or region code/i);

    await user.type(emailInput, "bad-email");
    await user.type(phoneInput, "12345");
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    expect(
      screen.getAllByText(/please enter a valid email address/i).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(
        /enter a valid phone number for the selected country/i
      ).length
    ).toBeGreaterThanOrEqual(1);

    // Switch country to India while preserving typed input, then test valid India number
    await user.clear(emailInput);
    await user.type(emailInput, "jordan@example.com");
    await user.clear(phoneInput);
    await user.type(phoneInput, "98765 43210");
    await user.selectOptions(countrySelect, "IN");

    expect((phoneInput as HTMLInputElement).value).toBe("98765 43210");

    // Submit valid form
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /form submitted successfully/i })
      ).toBeTruthy();
    });
    expect(
      screen.getByText(/This is a demonstration inquiry form/i)
    ).toBeTruthy();

    // Reset form
    await user.click(
      screen.getByRole("button", { name: /submit another inquiry/i })
    );
    expect(
      (screen.getByLabelText(/full name/i) as HTMLInputElement).value
    ).toBe("");
    expect(
      (screen.getByLabelText(/email address/i) as HTMLInputElement).value
    ).toBe("");
    expect(
      (screen.getByLabelText(/phone number/i) as HTMLInputElement).value
    ).toBe("");
    expect(
      (screen.getByLabelText(/country or region code/i) as HTMLSelectElement)
        .value
    ).toBe("US");
  });
});
