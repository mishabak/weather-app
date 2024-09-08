import { describe, expect, it } from "vitest";
import { BACKEND_BASE_URL } from "./config";

describe('config', () => {
    it("BackEnd base url", () => {
        // backend base url should be -->>
        expect(BACKEND_BASE_URL).toEqual("http://localhost:8006/api/")
    })
    
})