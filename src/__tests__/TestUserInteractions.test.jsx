import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TestUserInteractions from "../components/TestUserInteractions";

// Test for user interactions in TestUserInteractions component
describe("TestUserInteractions component", () => {
  test("User can input text and click buttons", () => {
    // Render the TestUserInteractions component
    render(<TestUserInteractions />);

    // Get input elements by their placeholders
    const nameInput = screen.getByPlaceholderText("Enter Name");
    const descriptionInput = screen.getByPlaceholderText("Enter Description");
    const passwordInput = screen.getByLabelText("Enter Password");

    // Simulate user input in the input fields
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(passwordInput, { target: { value: "secretpassword" } });

    // Assert that the input fields have the correct values
    expect(nameInput.value).toBe("John Doe");
    expect(descriptionInput.value).toBe("Test Description");
    expect(passwordInput.value).toBe("secretpassword");

    // Get button elements
    const submitButton = screen.getByText("Submit");
    const applyButton = screen.getByText("Apply");

    // Simulate user clicking on buttons
    fireEvent.click(submitButton);
    fireEvent.click(applyButton);
  });
});
