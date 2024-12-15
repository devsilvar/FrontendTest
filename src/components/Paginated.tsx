import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface quoteProp {
  id: number;
  quote: string;
  author: string;
}

const ClientSidePagination: React.FC = () => {
  const [data, setData] = useState<quoteProp[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes'); // Example API endpoint
        setData(response.data.quotes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination controls
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <h2 className='mt-4'>Data List</h2>{' '}
      <div className='p-3 shadow card mycard'>
        {currentItems.map((item) => (
          <div
            className='shadow-lg p-3 rounded-3 mb-2'
            style={{ fontSize: '1.1rem' }}
            key={item.id}
          >
            <blockquote>{item.quote} </blockquote>
            <small>{item.author}</small>
          </div>
        ))}

        <div>
          <button
            className='btn btn-outline-success'
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className='mx-3'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className='btn btn-outline-info'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientSidePagination;
