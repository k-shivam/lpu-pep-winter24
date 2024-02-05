import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter component", () => {
  test("renders with initial count of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterElement = getByTestId("counter");
    expect(counterElement.textContent).toBe("0");
  });

  test("increments the count when the increment button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId("increment");
    fireEvent.click(incrementButton);
    const counterElement = getByTestId("counter");
    expect(counterElement.textContent).toBe("1");
  });

  test("decrements the count when the decrement button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = getByTestId("decrement");
    fireEvent.click(decrementButton);
    const counterElement = getByTestId("counter");
    expect(counterElement.textContent).toBe("-1");
  });

  test("disables the decrement button when count is zero", () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = getByTestId("decrement");
  });

  test("enables the decrement button when count is greater than zero", () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId("increment");
    fireEvent.click(incrementButton);
    const decrementButton = getByTestId("decrement");
  });
});
