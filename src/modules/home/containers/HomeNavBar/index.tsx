import styles from "./HomeNavBar.module.scss";

export const HomeNavBar: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>Top</li>
      <li>Bottom</li>
      <li>Swim wear</li>
      <li>Watch</li>
      <li>Shoes</li>
      <li>Blog</li>
      <li>Accessories</li>
      <li>Sports</li>
      <li>Cosmetic</li>
      <li>Muslim Wear</li>
    </ul>
  );
};
