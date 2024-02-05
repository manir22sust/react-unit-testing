import { render, screen } from "@testing-library/react";
import TestWithMockDataWithBranching from "../components/TestWithMockDataWithBranching";
import { mockData } from "../data/mockdata";
import userEvent from "@testing-library/user-event";

// Describe block to group related test cases
describe("TestWithMockDataWithBranching component", () => {
  // Test Case 1: "Ordered list renders"
  test("Ordered list renders", () => {
    // Rendering the component with mock data and displayUnorderedList set to false
    render(
      <TestWithMockDataWithBranching
        data={mockData}
        displayUnorderedList={false}
      />
    );

    // Finding an element containing the text "McVanamy"
    const element = screen.getByText(/McVanamy/i);

    // Asserting that the element is in the document
    expect(element).toBeInTheDocument();
  });

  // Test Case 2: "Email link click handler called"
  test("Email link click handler called", async () => {
    // Setting up a mock function for the click handler
    const mockHandleClick = jest.fn();

    // Rendering the component with mock data, displayUnorderedList set to true, and the mock click handler
    render(
      <TestWithMockDataWithBranching
        data={mockData}
        displayUnorderedList={true}
        handleClick={mockHandleClick}
      />
    );

    // Simulating a user click on an element with the specified email text
    await userEvent.click(screen.getByText(/mmcvanamy0@e-recht.de/i));

    // Asserting that the mock click handler has been called
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
