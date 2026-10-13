import { Sum } from "../Sum";
test("sum function should calculate the sum of two functions", () => {
  const result = Sum(8, 9);
  //Assertion:
  expect(result).toBe(17);
});
