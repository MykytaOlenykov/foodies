import React from 'react';
import clsx from 'clsx';
import styles from './DualButtonGroup.module.css';

/**
 * Renders two side-by-side, pill-shaped buttons with a shared outline.
 *
 * @param {object} props
 * @param {string} props.leftLabel       — text for the left button
 * @param {() => void} props.onLeftClick — click handler for the left button
 * @param {object} [props.leftProps]     — extra props spread onto the left `<button>`
 * @param {string} props.rightLabel      — text for the right button
 * @param {() => void} props.onRightClick— click handler for the right button
 * @param {object} [props.rightProps]    — extra props spread onto the right `<button>`
 * @param {string} [props.className]     — className for the outer wrapper
 */
const DualButtonGroup = ({
  leftLabel,
  onLeftClick,
  leftProps = {},
  rightLabel,
  onRightClick,
  rightProps = {},
  className,
  ...rest
}) => {
  return (
    <div className={clsx(styles.DualButtonGroup, className)} {...rest}>
      <button
        type="button"
        onClick={onLeftClick}
        className={clsx(styles.DualButton, styles.left)}
        {...leftProps}
      >
        {leftLabel}
      </button>

      <button
        type="button"
        onClick={onRightClick}
        className={clsx(styles.DualButton, styles.right)}
        {...rightProps}
      >
        {rightLabel}
      </button>
    </div>
  );
}

export { DualButtonGroup };
