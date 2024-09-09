import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Climate from "./Climate";

vi.mock("../common/waterDrops", () => ({
  __esModule: true,
  default: ({ delay, duration, id }) => {
    expect(duration).toEqual([
      2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8,
      2.3, 2.5, 2.3, 1.8, 2.3,
    ]);
    switch (id) {
      case 1:
        expect(delay).toEqual("3s");
        break;
      case 2:
        expect(delay).toEqual("3.8s");
        break;
    }
    return <div>{`WaterDrop-${id}`}</div>;
  },
}));

describe("Climate Component", () => {
  it("pass correct duration and delay values to WaterDrops component", () => {
    render(<Climate />);
  });
});
