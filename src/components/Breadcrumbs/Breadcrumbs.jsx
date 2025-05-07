import * as styles from './Breadcrumbs.module.css';
import clsx from "clsx";
import { Typography } from "../Typography/Typography.jsx";

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
