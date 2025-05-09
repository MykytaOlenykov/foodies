import * as styles from './Breadcrumbs.module.css';
import clsx from "clsx";
import { Typography } from "../Typography/Typography.jsx";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Breadcrumbs items
 * @param {string} [props.className] - Additional class names
 */
const Breadcrumbs = ({ children, className, ...rest }) => {
  return (
    <div
      className={clsx(
        styles.Breadcrumbs,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

/**
 * @param {object} props
 * @param {React.ReactNode} props.children - Breadcrumb item text
 * @param {boolean} [props.isActive] - Whether the item is active
 * @param {string} [props.className] - Additional class names
 * @param {function} [props.onClick] - Click handler
 */
const BreadcrumbsItem = ({ children, isActive, className, onClick, ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      onClick={() => onClick && !isActive && onClick()}
      className={clsx(
        styles.BreadcrumbsItem,
        className,
        isActive && styles.active,
      )}
    >
      <Typography
        variant="body"
        textColor={isActive ? 'black' : 'gray'}
      >
        {children}
      </Typography>
    </button>
  )
}

const BreadcrumbsDivider = (props) => {
  return (
    <Typography
      variant="body"
      textColor="gray"
      {...props}
    >
      /
    </Typography>
  )
}

export { Breadcrumbs, BreadcrumbsItem, BreadcrumbsDivider }
