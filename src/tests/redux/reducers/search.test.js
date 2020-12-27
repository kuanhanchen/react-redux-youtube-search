import search from "../../../redux/reducers/search";
import { SEARCH, SEARCH_TERM, SEARCH_TOKEN, SEARCH_CUR_PAGE, SEARCH_LAST_PAGE } from "../../../redux/constant";

describe("tests for search reducer", () => {
  let action = {};
  let state = {
    term: null,
    videos: [],
    pageToken: null,
    curPage: 1,
    lastPage: 3
  };
  describe("handle INPUT action", () => {
    it(`should return a new object with updated videos
      if fetching new videos`, () => {
      action = {type: SEARCH, videos: [1]};
      const videos = search(state, action).videos;
      expect(videos).toHaveLength(1);
      expect(videos[0]).toBe(1);
      // expect(actions.onSearchTerm(term)).toEqual(expectedAction);
    });
    it(`should return a new object with the updated term
      if fetching the new term`, () => {
      action = {type: SEARCH_TERM, term: "test"};
      expect(search(state, action).term).toEqual("test");
    });
    it(`should return a new object with the updated term
      if fetching the new term`, () => {
      action = {type: SEARCH_TOKEN, token: "test"};
      expect(search(state, action).pageToken).toEqual("test");
    });
    it(`should return a new object with the updated curPage
      if fetching the new curPage`, () => {
      action = {type: SEARCH_CUR_PAGE, curPage: 6};
      expect(search(state, action).curPage).toEqual(6);
    });
    it(`should return a new object with the updated lastPage
      if fetching the new lastPage`, () => {
      action = {type: SEARCH_LAST_PAGE, lastPage: 6};
      expect(search(state, action).lastPage).toEqual(6);
    });
  });
});
