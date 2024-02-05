// Tests for the FirstTest component
import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";

// Test Case: "Example 1 renders successfully"
test("Example 1 renders successfully", () => {
  // Step 1: Render the component
  render(<FirstTest />);

  // Step 2: Query for the h2 element
  const element = screen.getByText(/first test/i);

  // Step 3: Assert that the element is in the document
  expect(element).toBeInTheDocument();
});
