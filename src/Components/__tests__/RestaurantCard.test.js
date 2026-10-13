import RestaurantCards from "../RestaurantCards";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
test("Should render RestaurantCards component with props inside it", () => {
  render(<RestaurantCards resData={MOCK_DATA} />);
  const name = screen.getByText("Kannur Food Point");
  expect(name).toBeInTheDocument();
});
//it("Should render the restaurant card component with promoted label", () => {});
