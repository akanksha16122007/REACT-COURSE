//Unit testing:
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
//use describe to group the testcases.
//test ki jgh "it" bhi likh skte h
describe("Contact us page describe block", () => {
  beforeAll(() => {
    console.log("before all");
  });
  beforeEach(() => {
    console.log("before each");
  });
  afterAll(() => {
    console.log("after all");
  });
  afterEach(() => {
    console.log("after each");
  });
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Should load 2 input components on contact us page", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox"); //--> this returns jsx element --> an html element.
    expect(inputBoxes.length).toBe(2);
  });
});
