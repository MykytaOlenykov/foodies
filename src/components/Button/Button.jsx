import * as styles from "./Button.module.css";

const Button = ({
  variant = "light",
  size = "medium",
  bordered = false,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`
        ${styles.Button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${bordered ? styles.bordered : ""}
      `}
    >
      {children}
    </button>
  );
};

export { Button };
