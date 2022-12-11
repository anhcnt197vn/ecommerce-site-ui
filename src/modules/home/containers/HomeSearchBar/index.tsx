import Link from "next/link";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { MainButton } from "../../components/MainButton";
import styles from "./HomeSearchBar.module.scss";

export const HomeSearchBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Blizoo</h1>
        <button>
          <AiOutlineSearch fontSize={30} />
        </button>
      </div>
      <div className={styles.rightSide}>
        <Link href="#" className={styles.marginRight}>
          Man&apos;s
        </Link>
        <Link href="#" className={styles.marginRight}>
          Woman&apos;s
        </Link>
        <button className={styles.marginRight}>
          <AiOutlineHeart fontSize={30} />
        </button>
        <button className={styles.marginRight}>
          <AiOutlineUser fontSize={30} />
        </button>
        <MainButton icon={<BsCart fontSize={20} />} className={styles.cartButton} title="Cart (0)" />
      </div>
    </div>
  );
};
