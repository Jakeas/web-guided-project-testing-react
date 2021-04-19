import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchMissions as mockFetchMissions } from "./api/fetchMissions";

import App from "./App";

// mock the function that makes the API request
// 1 - build the mock function
jest.mock("./api/fetchMissions");
console.log(mockFetchMissions);

// When the app comp renders and the "get data" button is clicked
// the api call is made and the missions list is rendered when the api
// promise is resolved
test("missions data is rendered after the API call is resolved", async () => {
  // 2. make the mock function return a promise, then return data
  render(<App />);

  // click on the button
  userEvent.click(screen.getByRole("button", { name: /get data/i }));

  // an async call is initiated - we "await" for that process to finish,
  // then make some assertion
});
