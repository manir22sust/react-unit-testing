import { render, screen } from "@testing-library/react";
import TestWithMockData from "../components/TestWithMockData";
import { mockData } from "../data/mockdata";

// Test Case: "List renders successfully"
test("List renders successfully", () => {
  // Rendering the TestWithMockData component with mock data
  render(<TestWithMockData data={mockData} />);
  // Finding an element containing the text "fletcher"
  const dummyData = screen.getByText(/fletcher/i);
  // Asserting that the element is in the document
  expect(dummyData).toBeInTheDocument();
});
