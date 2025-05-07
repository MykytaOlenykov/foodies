import style from "./Container.module.css";

const Container = ({ className = "", children }) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

export default Container;
