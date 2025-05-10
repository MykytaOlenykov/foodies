import ReactPaginate from 'react-paginate'
import * as styles from './Pagination.module.css'
import ChevronUp from "../../assets/icons/chevron-up.svg?react";

/**
 * @param {object} props
 * @param {number} props.totalPages
 * @param {number} props.activePage
 * @param {(pageNumber: number) => void} props.onPageChange
 */
export const Pagination = ({ totalPages, activePage, onPageChange }) => (
  <ReactPaginate
    pageCount={totalPages}
    forcePage={activePage - 1}
    onPageChange={({ selected }) => onPageChange(selected + 1)}
    previousLabel={<ChevronUp className={styles.PaginationButtonPrev} />}
    nextLabel={<ChevronUp className={styles.PaginationButtonNext} />}
    breakLabel="…"
    marginPagesDisplayed={1}
    pageRangeDisplayed={3}
    containerClassName={styles.Pagination}
    pageLinkClassName={styles.PaginationButton}
    activeLinkClassName={styles.PaginationButton__active}
    previousLinkClassName={styles.PaginationButton}
    nextLinkClassName={styles.PaginationButton}
    breakLinkClassName={styles.PaginationButton}
    disabledLinkClassName={styles.PaginationButton__disabled}
  />
)
