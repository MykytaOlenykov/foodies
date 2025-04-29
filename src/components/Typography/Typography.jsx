import clsx from "clsx";
import * as styles from './Typography.module.css';

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
};

/**
 * A responsive Typography component with native HTML tags.

 * @param {object} props
 * @param {"h1"|"h2"|"h3"|"h4"|"body"} props.variant  — typography style
 * @param {boolean} [props.truncate] — whether to truncate the text
 * @param {number} [props.lineClamp] — number of lines to clamp
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
const Typography = ({ variant, children, truncate, lineClamp, className }) => {
  const Tag = tagMap[variant] || 'p';

  return (
    <Tag
      className={clsx(
        styles.Typography,
        styles[variant],
        truncate && styles.truncate,
        lineClamp && styles.lineClamp,
        className
      )}
      style={lineClamp ? { '--Typography-line-clamp': lineClamp } : {} }
    >
      {children}
    </Tag>
  );
}

export { Typography }
