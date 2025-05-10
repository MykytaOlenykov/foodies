import NotFoundImage from '../../assets/images/not-found.svg'
import * as styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <img
        src={NotFoundImage}
        alt="Not Found"
        height={500}
        width={500}
      />
    </div>
  )
}
