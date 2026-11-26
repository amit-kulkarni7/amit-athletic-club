import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProgramsExplorer } from "./ProgramsExplorer";
import { PROGRAMS, WEEKLY_SCHEDULE } from "@/data/siteContent";

describe("ProgramsExplorer", () => {
  it("filters programs by discipline and experience level, handles zero-match empty state, and resets", async () => {
    const user = userEvent.setup();
    render(<ProgramsExplorer />);

    expect(
      screen.getByText(`Showing ${PROGRAMS.length} of ${PROGRAMS.length} Programs`)
    ).toBeTruthy();

    const categoryGroup = screen.getByRole("group", {
      name: /filter by discipline category/i,
    });
    const levelGroup = screen.getByRole("group", {
      name: /filter by experience level/i,
    });

    // Select Mobility & Recovery
    await user.click(
      within(categoryGroup).getByRole("button", { name: "Mobility & Recovery" })
    );
    expect(
      screen.getByText(`Showing 1 of ${PROGRAMS.length} Program`)
    ).toBeTruthy();

    // Combine with Advanced to produce a zero-result filter combination
    await user.click(within(levelGroup).getByRole("button", { name: "Advanced" }));
    expect(
      screen.getByText(`Showing 0 of ${PROGRAMS.length} Programs`)
    ).toBeTruthy();

    const emptyState = screen.getByRole("status");
    expect(emptyState.textContent).toContain(
      "No programs match \u201cMobility & Recovery\u201d at the \u201cAdvanced\u201d filter level."
    );
    expect(emptyState.textContent).toContain(
      "Try selecting a different experience level or reset the active filters"
    );

    // Reset via empty-state button
    await user.click(
      within(emptyState).getByRole("button", { name: /reset all filters/i })
    );
    expect(
      screen.getByText(`Showing ${PROGRAMS.length} of ${PROGRAMS.length} Programs`)
    ).toBeTruthy();
  });

  it("filters the weekly class schedule by day", async () => {
    const user = userEvent.setup();
    render(<ProgramsExplorer />);

    const scheduleSection = document.getElementById("weekly-schedule")!;
    expect(
      within(scheduleSection).getAllByRole("link", { name: /inquire/i }).length
    ).toBe(WEEKLY_SCHEDULE.length);

    await user.click(
      within(scheduleSection).getByRole("button", { name: "Monday" })
    );
    const mondayCount = WEEKLY_SCHEDULE.filter((s) => s.day === "Monday").length;
    expect(
      within(scheduleSection).getAllByRole("link", { name: /inquire/i }).length
    ).toBe(mondayCount);

    await user.click(
      within(scheduleSection).getByRole("button", {
        name: `All Days (${WEEKLY_SCHEDULE.length})`,
      })
    );
    expect(
      within(scheduleSection).getAllByRole("link", { name: /inquire/i }).length
    ).toBe(WEEKLY_SCHEDULE.length);
  });
});
