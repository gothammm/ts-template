import { returnOne } from "../src";

describe("index", () => {
  it(`should pass`, () => {
    expect(returnOne()).toEqual(1);
  });
  it(`should fail`, () => {
    expect(returnOne()).toEqual(0);
  });
});
