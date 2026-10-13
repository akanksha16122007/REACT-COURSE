//integration testing
import Body from "../Body";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
// it("Should render the body component with search button", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>,
//     ),
//   );
//   const searchBTN = screen.getByRole("button", { name: "search" });
//   expect(searchBTN).toBeInTheDocument();
// });
it("Should search reslist for biryani text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const card_before_search = screen.getAllByTestId("resCard");
  expect(card_before_search.length).toBe(15);
  const searchBTN = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Biryani" } });
  fireEvent.click(searchBTN);
  //screen should load 2 res Cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});
// it("Should filter my top rated restaurants", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>,
//     ),
//   );
//   const filterBTN = screen.getByRole("button", {
//     name: "Filter Top rated restaurants",
//   });
//   fireEvent.click(filterBTN);
//   const cardsAfterClick = screen.getAllByTestId("resCard");
//   expect(cardsAfterClick.length).toBe(4);
// });
