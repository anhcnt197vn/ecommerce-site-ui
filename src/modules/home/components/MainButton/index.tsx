import classNames from "classnames";
import React from "react";
import styles from "./MainButton.module.scss";

interface Props {
  icon: React.ReactNode | JSX.Element;
  title: string;
  className: string;
}

export const MainButton: React.FC<Props> = ({ icon, title, className }) => {
  return (
    <button className={classNames(styles.container, className)}>
      {icon}
      <p className={styles.text}>{title}</p>
    </button>
  );
};
