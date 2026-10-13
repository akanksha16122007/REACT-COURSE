import Cart from "../Cart";
import Header from "../Header";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { appStore } from "../utils/appStore";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("Should load my restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const AccordionHeading = screen.getByText("Biryani (5)");
  fireEvent.click(AccordionHeading);
  const foodItems = screen.getAllByTestId("food-items");
  expect(foodItems.length).toBe(5);
  const addBTN = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBTN[0]);
  const cart_items = screen.getByText("link", { name: "Cart 0" });
  expect(cart_items).toBeInTheDocument();
  expect(screen.getAllByTestId("food-items").length).toBe(7);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("food-items").length).toBe(5);
  expect(
    screen
      .getByText("Cart is empty. Add items in your cart!")
      .toBeInTheDocument(),
  );
});
