import { render, screen, waitFor } from "@testing-library/react";
import TestingStateChange from "../components/TestingStateChange";
import userEvent from "@testing-library/user-event";

// Test to check if the "page loaded" text is present
test("Testing page load", () => {
  // Render the TestingStateChange component
  render(<TestingStateChange />);

  // Find the element with the text "page loaded"
  const element = screen.getByText(/page loaded/i);

  // Expect the element to be in the document
  expect(element).toBeInTheDocument();
});

// Test to check if the "text visible" element is present after clicking the "toggle text" button
test("Toggle text visible", async () => {
  // Render the TestingStateChange component
  render(<TestingStateChange />);

  // Simulate a click on the "toggle text" button
  await userEvent.click(screen.getByText(/toggle text/i));

  // Expect the element with the text "text visible" to be in the document
  expect(screen.getByText(/text visible/i)).toBeInTheDocument();
});

// Test to check if the button is disabled after clicking the "toggle button disabled" button
test("Button disabled on click", async () => {
  // Render the TestingStateChange component
  render(<TestingStateChange />);

  // Trigger the action that should toggle the button state
  await userEvent.click(screen.getByText(/toggle button disabled/i));

  // Wait for the state to be updated
  await waitFor(() => {
    // Find the button with the text "toggle text"
    const toggleButton = screen.getByText(/toggle text/i);

    // Check if the button is disabled based on the current state
    const btnDisabled = toggleButton.disabled; // Accessing the disabled attribute

    // If the button is disabled, expect it to have the "disabled" attribute
    if (btnDisabled) {
      expect(toggleButton).toHaveAttribute("disabled");
    } else {
      // If the button is not disabled, expect it not to have the "disabled" attribute
      expect(toggleButton).not.toHaveAttribute("disabled");
    }
  });
});

test("Element added to the list", async () => {
  render(<TestingStateChange />);
  // Initial count should be 3, assuming your initial 'data' has 3 elements
  expect(screen.getAllByTestId("record").length).toBe(3);

  await userEvent.click(screen.getByText(/add to list/i));
  // After adding a new element, the count should be 4
  expect(screen.getAllByTestId("record").length).toBe(4);
});

// Test to check if an element is removed from the list
test("Element removed from list", async () => {
  // Render the component
  render(<TestingStateChange />);

  // Simulate a click on the "Remove from list" button
  await userEvent.click(screen.getByText(/remove from list/i));

  // Assert that the number of elements with the test ID "record" is now 3
  // This is based on the assumption that the initial count was 3, and one element is removed
  expect(screen.getAllByTestId("record").length).toBe(3);
});
