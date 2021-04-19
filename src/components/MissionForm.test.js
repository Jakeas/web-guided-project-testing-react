import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MissionForm from "./MissionForm";

// Mission form renders with no errors, when it first mounts
test("renders without errors", () => {
  render(<MissionForm />);
});

// When the component receives true for "isFetchingData" prop,
// then the loading message appears in place of the button.
test("renders loading message when isFetchingData changes to true", () => {
  // arrange - render the component with the starting props
  const { rerender } = render(<MissionForm isFetchingData={false} />);

  // act - rerender the component with new props
  rerender(<MissionForm isFetchingData={true} />);

  // assert - check that the loading message is rendered
  const loadingMessage = screen.getByText(/we are fetching datas/i);
});
