import { isEmail } from "./isEmail";

describe("isEmail", () => {
  it("accepts emails with @", () => {
    expect(isEmail("samone@gmail.com")).toBe(true);
  });

  it("rejects emails without @", () => {
    expect(isEmail("this is not an email")).toBe(false);
  });
});
