import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { connect } from "react-redux";
import {
  onSearch,
  onSearchTerm,
  onSearchPageToken,
  onSearchCurPage,
  onSearchLastPage
} from "../redux/actions";
import SearchBar from "./search-bar";
import VideoList from "./video-list";
import Pagination from "./pagination";
import { usePrevious, API_KEY } from "./utilities/helper";

const Home = ({
  onSearch,
  onSearchTerm,
  onSearchPageToken,
  onSearchCurPage,
  onSearchLastPage,
  term,
  videos,
  pageToken,
  curPage,
  lastPage
}) => {
  const [totalResults, setTotalResults] = useState(1000000);
  const prevTerm = usePrevious(term);

  const videoSearch = debounce(term => {
    const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=31`;
    const url = `${ROOT_URL}&q=${term}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    axios.get(url)
      .then(response => {
        if (prevTerm !== term) {
          onSearchCurPage(1);
          onSearchLastPage(3);
          onSearch(response.data.items);
          setTotalResults(response.data.pageInfo.totalResults);
        } else {
          onSearch([...videos, ...response.data.items]);
        }
        onSearchPageToken(response.data.nextPageToken);
      })
      .catch(err => {
        alert(err);
      });
  }, 300);

  useEffect(() => {
    if (curPage === lastPage && pageToken) {
      onSearchLastPage(lastPage + 1);
      if (curPage % 3 === 0) {
        videoSearch(term);
      }
    }
  }, [curPage, lastPage, pageToken, term, videoSearch, onSearchLastPage]);

  return (
    <div>
      <h1>YouTube Video Search</h1>
      <SearchBar
        onSearchTermChange={videoSearch}
        term={term}
        onSearchTerm={onSearchTerm}
      />
      <VideoList videos={videos}  curPage={curPage} />
      {term && (
        <Pagination
        curPage={curPage}
        setCurPage={onSearchCurPage}
        totalResults={totalResults}
        lastPage={lastPage}
      />)}
    </div>
)};

const mapStateToProps = state => {
  return {
    videos: state.search.videos,
    term: state.search.term,
    pageToken: state.search.pageToken,
    curPage: state.search.curPage,
    lastPage: state.search.lastPage
  };
};

export default connect(
  mapStateToProps,
  {
    onSearch,
    onSearchTerm,
    onSearchPageToken,
    onSearchCurPage,
    onSearchLastPage
  }
)(Home);
