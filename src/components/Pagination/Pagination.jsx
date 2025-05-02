import * as styles from "./Pagination.module.css";
import clsx from "clsx";

/**
 * @param {object} props
 * @param {number} props.page
 * @param {boolean} props.isActive
 * @param {(e) => void} props.onClick
 */
const PaginationButton = ({ page, isActive, onClick }) => {
  return (
    <button
      className={clsx(
        styles.PaginationButton,
        isActive && styles.PaginationButton__active,
      )}
      onClick={onClick}
    >
      {page}
    </button>
  );
};

/**
 * @param {object} props
 * @param {number} props.totalPages
 * @param {number} props.activePage
 * @param {(pageNumber: number) => void} props.onPageChange
 */
const Pagination = ({ totalPages, activePage, onPageChange }) => {
  return (
    <div className={styles.Pagination}>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index}
          page={index + 1}
          isActive={activePage === index + 1}
          onClick={() => onPageChange(index + 1)}
        />
      ))}
    </div>
  );
};

export { Pagination };
