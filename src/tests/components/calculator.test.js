import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import Calculator from "../../components/Calculator";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it("should contain calculator buttons", () => {
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "6" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "7" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "8" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "9" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "×" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "÷" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "=" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "." })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "AC" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+/-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "%" })).toBeInTheDocument();
  });

  describe("Calculation", () => {
    it("should show 1 in the result if the button with the value 1 is pressed", () => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
      expect(screen.getByTestId("result")).toHaveTextContent(1);
    });

    it("should show 12 in the result if buttons with the value 1 & 2 are pressed in order", () => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
      fireEvent.click(screen.getByRole("button", { name: "2" }));
      expect(screen.getByTestId("result")).toHaveTextContent(12);
    });

    it("should show 34 in the result if buttons with the value 1, 2, +, 3, and 4 are pressed in order", () => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
      fireEvent.click(screen.getByRole("button", { name: "2" }));
      fireEvent.click(screen.getByRole("button", { name: "+" }));
      fireEvent.click(screen.getByRole("button", { name: "3" }));
      fireEvent.click(screen.getByRole("button", { name: "4" }));
      expect(screen.getByTestId("result")).toHaveTextContent(34);
    });

    it("should show 46 in the result if buttons with the value 1, 2, +, 3, 4, and - are pressed in order", () => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
      fireEvent.click(screen.getByRole("button", { name: "2" }));
      fireEvent.click(screen.getByRole("button", { name: "+" }));
      fireEvent.click(screen.getByRole("button", { name: "3" }));
      fireEvent.click(screen.getByRole("button", { name: "4" }));
      fireEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByTestId("result")).toHaveTextContent(46);
    });

    it("should show 46 in the result if buttons with the value 1, 2, +, 3, 4, -, 50, and = are pressed in order", () => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
      fireEvent.click(screen.getByRole("button", { name: "2" }));
      fireEvent.click(screen.getByRole("button", { name: "+" }));
      fireEvent.click(screen.getByRole("button", { name: "3" }));
      fireEvent.click(screen.getByRole("button", { name: "4" }));
      fireEvent.click(screen.getByRole("button", { name: "-" }));
      fireEvent.click(screen.getByRole("button", { name: "5" }));
      fireEvent.click(screen.getByRole("button", { name: "0" }));
      fireEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByTestId("result")).toHaveTextContent(-4);
    });

    it("should show 0 in the result if buttons with the value 1, 2, +, 3, 4, -, 50, and AC are pressed in order", () => {
      fireEvent.click(screen.getByRole("button", { name: "1" }));
      fireEvent.click(screen.getByRole("button", { name: "2" }));
      fireEvent.click(screen.getByRole("button", { name: "+" }));
      fireEvent.click(screen.getByRole("button", { name: "3" }));
      fireEvent.click(screen.getByRole("button", { name: "4" }));
      fireEvent.click(screen.getByRole("button", { name: "-" }));
      fireEvent.click(screen.getByRole("button", { name: "5" }));
      fireEvent.click(screen.getByRole("button", { name: "0" }));
      fireEvent.click(screen.getByRole("button", { name: "AC" }));
      expect(screen.getByTestId("result")).toHaveTextContent(0);
    });
  });
});
