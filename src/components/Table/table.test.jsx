import { describe, expect, it } from "vitest";
import tableColumn from "./column";

describe("MUI table", () => {
  const expectedFields = ["id", "icon", "country", "lastName", "date"];
  it("weatherList column", () => {
    tableColumn.weather.map((evnt, idx) => {
      expect(evnt).toHaveProperty(("field", "headerName"));
      expect(evnt.field).toBe(expectedFields[idx]);
    });
  });
});
