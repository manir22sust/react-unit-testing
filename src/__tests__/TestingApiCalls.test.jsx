import { render, screen, act } from "@testing-library/react";
import TestingApiCalls from "../components/TestingApiCalls";
import * as services from "../utils/Services";

test("Fetch Data API called", async () => {
  // Set up a mock implementation that returns a promise
  const mockFetchData = jest.spyOn(services, "FetchData").mockResolvedValue([
    {
      name: "manir",
    },
  ]);

  await act(async () => {
    render(<TestingApiCalls />);
  });

  // Ensure the asynchronous code has completed before making the assertion
  expect(mockFetchData).toHaveBeenCalledTimes(1);

  // Use screen.getByText without waitFor
  expect(screen.getByText(/manir/i)).toBeInTheDocument();
});
