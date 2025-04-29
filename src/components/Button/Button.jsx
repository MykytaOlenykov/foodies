import * as styles from "./Button.module.css";
import clsx from "clsx";

/**
 * A styled button with optional icon, border, and size/variant presets.
 *
 * @param {{
 *   variant?: "dark" | "light" | "transparent",
 *   size?: "small" | "medium",
 *   bordered?: boolean,
 *   disabled?: boolean,
 *   icon?: React.ReactNode,
 *   children: React.ReactNode,
 * }} props
 * @param {"dark"|"light"|"transparent"} [props.variant="dark"] — colour/style preset.
 * @param {"small"|"medium"} [props.size="medium"] — padding/font-size preset.
 * @param {boolean} [props.bordered=false] — whether to draw a border.
 * @param {boolean} — whether the button is disabled.
 * @param {React.ReactNode} [props.icon] — an icon element.
 * @param {React.ReactNode} props.children — button text.
 */
const Button = ({
  variant = "dark",
  size = "medium",
  bordered = false,
  icon,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        styles.Button,
        styles[variant],
        styles[size],
        bordered && styles.bordered,
        rest.className,
      )}
    >
      {children}
      {icon}
    </button>
  );
};

export { Button };
