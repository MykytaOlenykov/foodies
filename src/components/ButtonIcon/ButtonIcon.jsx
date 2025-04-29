import * as styles from "./ButtonIcon.module.css";
import clsx from "clsx";

/**
 * A styled button with icon
 *
 * @param {{
 *   variant?: "dark" | "light",
 *   size?: "small" | "medium",
 *   disabled?: boolean,
 *   icon?: React.ReactNode,
 * }} props
 * @param {"dark"|"light"} — colour/style preset.
 * @param {"small"|"medium"} — padding/font-size preset.
 * @param {boolean} — whether the button is disabled.
 * @param {React.ReactNode} [props.icon] — an icon element.
 */
const ButtonIcon = ({
  variant,
  size,
  icon,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        styles.ButtonIcon,
        styles[variant],
        styles[size],
        rest.className,
      )}
    >
      {icon}
    </button>
  );
};

export { ButtonIcon };
