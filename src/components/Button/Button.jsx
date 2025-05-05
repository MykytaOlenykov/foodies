import * as styles from "./Button.module.css";
import clsx from "clsx";

/**
 * @param {object} props
 * @param {string} props.className - CSS class to apply to the component.
 * @param {"dark"|"light"|"transparent"} props.variant — color/style preset.
 * @param {"small"|"medium"} props.size — padding/font-size preset.
 * @param {boolean} props.bordered — whether to draw a border.
 * @param {React.ReactNode} props.icon — an icon element.
 * @param {boolean} props.disabled — whether the button is disabled.
 * @param {"button"|"submit"|"reset"} [props.type] — button type.
 * @param {React.ReactNode} props.children — button text or other content.
 * @param {(e) => void} props.onClick — click handler
 */
const Button = ({
  variant,
  size,
  bordered = false,
  disabled = false,
  type = "button",
  icon,
  children,
  onClick,
  className,
  ...restProps
}) => {
  return (
    <button
      className={clsx(
        styles.Button,
        styles[variant],
        styles[size],
        bordered && styles.bordered,
        className,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...restProps}
    >
      {children}
      {icon}
    </button>
  );
};

export { Button };
