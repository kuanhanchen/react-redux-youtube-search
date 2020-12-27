import React, { useState } from "react";

const Pagination = ({ curPage, setCurPage, totalResults, lastPage }) => {
  const [active, setActive] = useState(curPage);
  const navigate = num => {
    setCurPage(num);
  }
  const PaginationBtn = ({className = '', value}) => (
    <button
      className={`pagination-btn${active === value ? ' active' : ''} ${className}`}
      onClick={() => { navigate(value); setActive(value); }}
    >
      {value}
    </button>
  );

  const newPages = () => {
    const arr = [];
    for (let i = 4; i <= lastPage; i++) {
      arr.push(<PaginationBtn value={i} />)
    }
    return arr;
  }
  return (
    <div className="pagination">
      <PaginationBtn value={1} />
      {totalResults > 10 && <PaginationBtn value={2} />}
      {totalResults > 20 && <PaginationBtn value={3} />}
      {newPages()}
    </div>
  );
}

export default Pagination;
