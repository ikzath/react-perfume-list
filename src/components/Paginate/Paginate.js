import React from 'react';
import { PaginateButton, PaginateBar, PaginateBarElements } from "./PaginateElements";


const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <PaginateBar>
        {pageNumbers.map(number => (
            <PaginateBarElements> Page :
                <PaginateButton key={number} onClick={() => paginate(number)} >{number}</PaginateButton>
            </PaginateBarElements>
          ))}
      </PaginateBar>
  );
};

export default Paginate;