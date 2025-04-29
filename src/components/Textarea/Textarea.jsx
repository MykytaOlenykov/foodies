import { useEffect, useRef } from "react";
import clsx from "clsx";
import * as styles from "./Textarea.module.css";

const MAX_LENGTH = 200;

/**
 * @param {object} props
 * @param {number} props.maxLength - Max length of the textarea (default: 200)
 * @param {string} props.value - Controlled value of the textarea
 * @param {function} props.onChange - Change handler (e) => void
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.disabled] - Whether the textarea is disabled
 * @param {boolean} [props.required] - Whether the textarea is required
 */
const Textarea = ({
  value,
  onChange,
  placeholder = '',
  maxLength = MAX_LENGTH,
  disabled = false,
  required = false,
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
    <div className={styles.TextareaContainer}>
      <textarea
        ref={ref}
        className={styles.Textarea}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
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
