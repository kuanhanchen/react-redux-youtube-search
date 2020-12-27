import {
  SEARCH,
  SEARCH_TERM,
  SEARCH_TOKEN,
  SEARCH_CUR_PAGE,
  SEARCH_LAST_PAGE
} from "../constant";

const initialState = {
  term: null,
  videos: [],
  pageToken: null,
  curPage: 1,
  lastPage: 3
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {...state, videos: [...action.videos]};
    case SEARCH_TERM:
      return {...state, term: action.term};
    case SEARCH_TOKEN:
      return {...state, pageToken: action.token};
    case SEARCH_CUR_PAGE:
      return {...state, curPage: action.curPage};
      case SEARCH_LAST_PAGE:
      return {...state, lastPage: action.lastPage};
    default:
      return state;
  }
};

export default search;
