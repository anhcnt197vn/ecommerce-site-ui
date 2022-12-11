import Link from "next/link";
import styles from "./HomeToolbar.module.scss";

export const HomeToolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <Link href="#">Client Service</Link>
      <Link href="#">FAQ</Link>
      <Link href="#">About</Link>
      <Link href="#">Eng</Link>
    </div>
  );
};
