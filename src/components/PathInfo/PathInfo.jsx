import { Link } from 'react-router-dom';
import { Typography }from '../Typography/Typography';
import styles from './PathInfo.module.css';

/**
 * @param {Object} props
 * @param {string} props.current - The current page title
 */
export const PathInfo = ({ current }) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        <Typography variant="body" textColor="gray" className={styles.text}>Home</Typography>
      </Link>
      <span className={styles.separator}>/</span>
      <Typography variant="body" textColor="black" className={styles.text}>{current}</Typography>
    </div>
  );
};
