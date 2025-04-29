import React from 'react';
import styles from './Input.module.css';

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
