import React from 'react';
import clsx from 'clsx';
import styles from './DualButtonGroup.module.css';

import { Button } from "../Button/Button";

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
      <Button
        variant="light"
        size="small"
        onClick={onLeftClick}
        className={clsx(styles.DualButton, styles.left)}
      >
        {leftLabel}
      </Button>

      <Button
        variant="dark"
        size="small"
        onClick={onRightClick}
        className={clsx(styles.DualButton, styles.right)}
      >
        {rightLabel}
      </Button>
    </div>
  );
};

export { DualButtonGroup };
