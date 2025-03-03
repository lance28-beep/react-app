import React, { useState } from 'react'

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <p>Current Page: {currentPage}</p>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}

export default Pagination