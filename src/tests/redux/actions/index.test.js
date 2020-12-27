import * as actions from "../../../redux/actions";
import { SEARCH, SEARCH_TERM, SEARCH_TOKEN, SEARCH_CUR_PAGE, SEARCH_LAST_PAGE } from "../../../redux/constant";

describe("actions", () => {
  it("should create an action to store videos", () => {
    const videos = [1];
    const expectedAction = {
      type: SEARCH,
      videos
    }
    expect(actions.onSearch([1])).toEqual(expectedAction);
  });
  it("should create an action to store the term", () => {
    const term = "abc";
    const expectedAction = {
      type: SEARCH_TERM,
      term
    }
    expect(actions.onSearchTerm(term)).toEqual(expectedAction);
  });
  it("should create an action to store the pakeToken", () => {
    const token = "abc";
    const expectedAction = {
      type: SEARCH_TOKEN,
      token
    }
    expect(actions.onSearchPageToken(token)).toEqual(expectedAction);
  });
  it("should create an action to store the current page", () => {
    const curPage = 1;
    const expectedAction = {
      type: SEARCH_CUR_PAGE,
      curPage
    }
    expect(actions.onSearchCurPage(curPage)).toEqual(expectedAction);
  });
  it("should create an action to store the last page", () => {
    const lastPage = 1;
    const expectedAction = {
      type: SEARCH_LAST_PAGE,
      lastPage
    }
    expect(actions.onSearchLastPage(lastPage)).toEqual(expectedAction);
  });
});
