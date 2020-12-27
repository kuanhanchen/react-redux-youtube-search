import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import SearchBar from "../../components/search-bar";

describe("SearchBar", () => {
  beforeEach(() => {
    render(
      <SearchBar
        onSearchTerm={()=>{}}
        onSearchTermChange={()=>{}}
      />);
  });

  it("should contain a search bar input field", () => {
    expect(screen.getByTestId("search-bar-input")).toBeInTheDocument();
  });

  describe("Show the search", () => {
    it("should show the input, 23, in the input field if entering 23", () => {
      const input = screen.getByTestId("search-bar-input");
      fireEvent.change(input, { target: { value: '23' } })
      expect(input.value).toBe('23')
    });
  });
});
