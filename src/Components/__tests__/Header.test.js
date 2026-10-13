import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
//unit testing:
test(" Render Header  and should have a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  //if we want to specify the button if there are multiple then we can specify it using name.
  const button_login = screen.getByRole("button", { name: "Login" });
  expect(button_login).toBeInTheDocument();
});
//it will pass if it exactly has 0 items
test(" Render Header  and should have cart items as 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  //because I inserted an icon in front of it so that's why i need to write link over here.
  const cartItems = screen.getByRole("link", { name: "Cart 0" });
  expect(cartItems).toBeInTheDocument();
});
//so just to check if it has "Cart" in it in the header or not we will use rejex so,
test(" Render Header  and  it should have cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  //because I inserted an icon in front of it so that's why i need to write link over here.
  const cart = screen.getByRole("link", { name: /Cart/ });
  expect(cart).toBeInTheDocument();
});
//let's test login-->logout and then logout-->login (check if it happens like this or not).
it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button");
  fireEvent.click(loginButton);
  const logoutButton = screen.getByText("Logout");
  expect(logoutButton).toBeInTheDocument();
});
