import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from "../test-utils";
import Home from "../../components/Home";

describe("Home", () => {
  beforeEach(() => {
    const { queryByTestId } = render(<Home />);
  });

  it("should contain a button showing open calculator", () => {
    expect(screen.getByRole("button", { name: /Open Calculator/i })).toBeInTheDocument();
  });

  it("should not contain a modal in the intial state", () => {
    expect(screen.queryByTestId("modal")).toBeNull();
  });
  it("should contain a modal if the open calculator button is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: /Open Calculator/i }));
    expect(screen.queryByTestId("modal")).toBeTruthy();
  });
  it("should close a modal if the outside of the modal is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: /Open Calculator/i }));
    expect(screen.queryByTestId("modal")).toBeTruthy();
    fireEvent.click(screen.queryByTestId("modal"));
    expect(screen.queryByTestId("modal")).toBeNull();
  });
});
