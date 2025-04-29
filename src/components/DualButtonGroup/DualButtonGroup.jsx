import React from 'react';
import clsx from 'clsx';
import styles from './DualButtonGroup.module.css';

/**
 * @param {object} props
 * @param {string} props.leftLabel       — text for the left button
 * @param {(e) => void} props.onLeftClick — click handler for the left button
 * @param {string} props.rightLabel      — text for the right button
 * @param {(e) => void} props.onRightClick— click handler for the right button
 */
const DualButtonGroup = ({
  leftLabel,
  onLeftClick,
  rightLabel,
  onRightClick,
}) => {
  return (
    <div className={styles.DualButtonGroup}>
      <button
        type="button"
        onClick={onLeftClick}
        className={clsx(styles.DualButton, styles.left)}
      >
        {leftLabel}
      </button>

      <button
        type="button"
        onClick={onRightClick}
        className={clsx(styles.DualButton, styles.right)}
      >
        {rightLabel}
      </button>
    </div>
  );
}

export { DualButtonGroup };
