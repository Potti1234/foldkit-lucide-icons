import { describe, expect, test } from "vitest";
import { Check, LogOut } from "./icons";

describe("Foldkit Lucide icons", () => {
  test("renders a decorative SVG with Lucide defaults", () => {
    const node = Check();

    expect(node?.sel).toBe("svg");
    expect(node?.data?.attrs).toMatchObject({
      "aria-hidden": "true",
      fill: "none",
      height: "24",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      width: "24",
    });
    expect(node?.children).toHaveLength(1);
  });

  test("supports accessible labels, sizing, classes, and absolute stroke widths", () => {
    const node = LogOut({
      size: 48,
      strokeWidth: 2,
      absoluteStrokeWidth: true,
      class: "button-icon",
      label: "Sign out",
    });

    expect(node?.data?.attrs).toMatchObject({
      "aria-label": "Sign out",
      height: "48",
      role: "img",
      "stroke-width": "1",
      width: "48",
    });
    expect(node?.data?.class).toMatchObject({ "button-icon": true });
    expect(node?.children).toHaveLength(3);
  });
});
