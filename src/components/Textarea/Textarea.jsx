import { useEffect, useRef } from "react";
import clsx from "clsx";
import * as styles from "./Textarea.module.css";

const MAX_LENGTH = 200;

/**
 * A textarea that auto-resizes to fit content and shows a character counter.
 * Counter turns red if value length exceeds maxLength.
 *
 * @param {object} props
 * @param {string} props.value                - Controlled value of the textarea
 * @param {function} props.onChange           - Change handler (e) => void
 * @param {string} [props.placeholder]        - Placeholder text
 * @param {number} props.maxLength            - Max length of the textarea (default: 200)
 * @param {string} [props.className]          - Additional class for container
 */
const Textarea = ({
  value,
  onChange,
  placeholder = '',
  maxLength = MAX_LENGTH,
  className,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const ta = ref.current;
    if (!ta) return;

    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }, [value]);

  const overLimit = value.length > maxLength;

  return (
    <div className={clsx(styles.TextareaContainer, className)}>
      <textarea
        ref={ref}
        className={styles.Textarea}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      <div>
        <span className={clsx(styles.TextareaCounter, overLimit && styles.overLimit)}>
          {value.length}
        </span>
        <span className={styles.TextareaTotal}>
          /{maxLength}
        </span>
      </div>
    </div>
  );
}

export { Textarea }
