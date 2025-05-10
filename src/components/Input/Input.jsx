import styles from "./Input.module.css";
import { Typography } from "../Typography/Typography.jsx";

/**
 * A reusable styled input component with optional error message and right-side icon.
 *
 * @param {Object} props
 * @param {string} props.name - The input name used in form submission.
 * @param {string} props.placeholder - The input placeholder text. Appends "*" if the field is required.
 * @param {string} props.value - The current value of the input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Handler called when input value changes.
 * @param {string} [props.type='text'] - The HTML input type (e.g. 'text', 'password').
 * @param {string} [props.error] - Optional error message shown below the input.
 * @param {"default" | "underline" | "ghost"} [variant='default'] - Visual style of the input.
 * @param {number} [props.maxLength] - Maximum number of characters allowed in the input.
 * @param {boolean} [props.disabled=false] - If true, the input is disabled.
 * @param {boolean} [props.required=false] - If true, appends "*" to the placeholder and sets `required` on the input.
 * @param {React.ReactNode} [props.iconRight] - Optional icon displayed on the right side of the input.
 * @param {() => void} [props.onIconClick] - Optional click handler for the right-side icon button.
 * @param {string} [props.className] - Additional CSS classes for custom styling.
 * @param {string} [props.name] - The name attribute for the input element.
 * @param {(e) => void} [props.onFocus] - Optional focus handler for the input.
 * @param {(e) => void} [props.onBlur] - Optional blur handler for the input.
 */
export const Input = ({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  variant = "default",
  maxLength,
  disabled,
  required = false,
  iconRight,
  onIconClick,
  className,
  onFocus,
  onBlur,
}) => {
  const showCounter = typeof maxLength === "number";

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ""} ${className}`}>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${styles[variant]} ${error ? styles.error : ""}`}
          type={type}
          placeholder={required ? `${placeholder}*` : placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {iconRight && (
          <button type="button" className={styles.iconButton} onClick={onIconClick}>
            {iconRight}
          </button>
        )}
        {showCounter && (
          <div className={styles.counter}>
            {value.length}/{maxLength}
          </div>
        )}
      </div>
      {error && <Typography variant="body" textColor="red">{error}</Typography>}
    </div>
  );
};
