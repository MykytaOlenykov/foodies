import * as styles from "./ButtonIcon.module.css";
import clsx from "clsx";

/**
 * @param {object} props
 * @param {"dark"|"light"} props.variant— colour/style preset.
 * @param {"small"|"medium"} props.size — padding/font-size preset.
 * @param {boolean} props.disabled — whether the button is disabled.
 * @param {"button"|"submit"|"reset"} [props.type] — button type.
 * @param {React.ReactNode} [props.icon] — an icon element.
 * @param {(e) => void} props.onClick — click handler
 */
const ButtonIcon = ({
  variant,
  size,
  icon,
  disabled,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={clsx(
        styles.ButtonIcon,
        styles[variant],
        styles[size],
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export { ButtonIcon };
