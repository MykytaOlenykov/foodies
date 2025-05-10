import { Image } from '../Image/Image'
import * as styles from './Avatar.module.css'

const getInitials = name => {
  if (!name) return '?'
  return name
    .split(' ')
    .map(n => n.charAt(0).toUpperCase())
    .filter(Boolean)
    .slice(0, 2)
    .join('')
}

/**
 * @param {string} src   Image URL for the avatar.
 * @param {number} size  Width/height in pixels (default: 40).
 * @param {string} name  User’s name — used to derive initials.
 */
const Avatar = ({ src, size = 40, name }) => {
  return (
    <Image
      src={src}
      alt={name || 'Avatar'}
      className={styles.Avatar}
      style={{
        width: size,
        height: size,
      }}
      renderFallback={() => (
        <div
          className={styles.Avatar}
          style={{
            width: size,
            height: size,
            fontSize: `${Math.round(size / 2.5)}px`,
          }}
        >
          {getInitials(name)}
        </div>
      )}
    />
  )
}

export { Avatar }
