import styles from './Input.module.css';

/**
 * A reusable styled input component with optional error message and right-side icon.
 *
 * @param {Object} props
 * @param {string} props.placeholder - The input placeholder text. Appends "*" if the field is required.
 * @param {string} props.value - The current value of the input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Handler called when input value changes.
 * @param {string} [props.type='text'] - The HTML input type (e.g. 'text', 'password').
 * @param {string} [props.error] - Optional error message shown below the input.
 * @param {boolean} [props.disabled=false] - If true, the input is disabled.
 * @param {boolean} [props.required=false] - If true, appends "*" to the placeholder and sets `required` on the input.
 * @param {React.ReactNode} [props.iconRight] - Optional icon displayed on the right side of the input.
 * @param {() => void} [props.onIconClick] - Optional click handler for the right-side icon button.
 */
const Input = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled,
  required = false,
  iconRight,
  onIconClick,
}) => {
  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${error ? styles.error : ''}`}
          type={type}
          placeholder={required ? `${placeholder}*` : placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {iconRight && (
          <button type="button" className={styles.iconButton} onClick={onIconClick}>
            {iconRight}
          </button>
        )}
      </div>
      {/*todo: replace with typography*/}
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
