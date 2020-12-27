import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from "../test-utils";
import Home from "../../components/Home";

describe("Home", () => {
  beforeEach(() => {
    const { queryByTestId } = render(
      <Home
      onSearch={()=>{}}
      onSearchTerm={()=>{}}
      onSearchPageToken=""
      onSearchCurPage=""
      onSearchLastPage=""
      term=""
      videos={[]}
      pageToken=""
      curPage=""
      lastPage=""
      />
    );
  });

  it("should contain a title, YouTube Video Search", () => {
    expect(
      screen.getByText("YouTube Video Search")
    ).toBeInTheDocument();
  });
});
