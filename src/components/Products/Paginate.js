import React from 'react';
import { PaginateButton } from './ProductElements';


const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
              <PaginateButton onClick={() => paginate(number)} >{number}</PaginateButton>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Paginate;