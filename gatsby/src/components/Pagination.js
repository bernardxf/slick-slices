import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  align-content: center;
  align-items: center;
  border: 1px solid var(--grey);
  border-radius: 5px;
  display: flex;
  justify-items: center;
  margin: 2rem 0;
  text-align: center;
  & > * {
    border-right: 1px solid var(--grey);
    flex: 1;
    padding: 1rem;
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      color: var(--grey);
      pointer-events: none;
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export default function Pagination({
    pageSize,
    totalCount,
    currentPage,
    skip,
    base,
}) {
    // make some variables
    const totalPages = Math.ceil(totalCount / pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
        <PaginationStyles>
            <Link
                title="Prev Page"
                disabled={!hasPrevPage}
                to={`${base}/${prevPage}`}
            >
                ← <span className="word">Prev</span>
            </Link>
            {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                    className={currentPage === 1 && i === 0 ? 'current' : ''}
                    to={`${base}/${i > 0 ? i + 1 : ''}`}
                    key={`page${i}`}
                >
                    {i + 1}
                </Link>
            ))}
            <Link
                title="Next Page"
                disabled={!hasNextPage}
                to={`${base}/${nextPage}`}
            >
                <span className="word">Next</span> →
      </Link>
        </PaginationStyles>
    );
}