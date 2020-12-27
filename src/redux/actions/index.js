import {
  SEARCH,
  SEARCH_TERM,
  SEARCH_TOKEN,
  SEARCH_CUR_PAGE,
  SEARCH_LAST_PAGE
} from "../constant";

export const onSearch = (videos = []) => ({
  type: SEARCH,
  videos: videos
});

export const onSearchTerm = (term = '') => ({
  type: SEARCH_TERM,
  term: term
});

export const onSearchPageToken = (token = '') => ({
  type: SEARCH_TOKEN,
  token: token
});

export const onSearchCurPage = (curPage = 1) => ({
  type: SEARCH_CUR_PAGE,
  curPage: curPage
});

export const onSearchLastPage = (lastPage = 3) => ({
  type: SEARCH_LAST_PAGE,
  lastPage: lastPage
});
