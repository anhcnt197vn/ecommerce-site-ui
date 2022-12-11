import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import classNames from "classnames";
import { Product } from "../../../../utils/types";

interface Props {
  item: Product;
}

export const ProductCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCardHeader}>
        <Image src="/images/product.jpg" alt="product" fill />
        <div className={styles.discount}>-15%</div>
        <button className={styles.heartButton}>
          <AiOutlineHeart fontSize={20} />
        </button>
      </div>
      <div className={styles.productCardContent}>
        <div className={styles.productContent}>
          <p className={styles.productName}>{item.productName}</p>
          <div className={styles.price}>
            <p className={styles.mainPrice}>$ {item.price}</p>
            <p className={styles.oldPrice}>$ {item.oldPrice}</p>
          </div>
        </div>
        <div className={styles.productVariant}>
          <div className={styles.colorContainer}>
            {item.colors.map((color) => (
              <div key={color} className={styles.circle} style={{ backgroundColor: color }} />
            ))}
          </div>
          <div className={styles.sizeContainer}>
            <div className={classNames(styles.circle)}>
              <span>S</span>
            </div>
            <div className={classNames(styles.circle)}>
              <span>M</span>
            </div>
            <div className={classNames(styles.circle)}>
              <span>L</span>
            </div>
          </div>
        </div>
        <div className={styles.starContainer}>
          <div className={styles.startLeft}>
            <AiOutlineStar fontSize={14} />
            <span>4.8</span>
          </div>
          <button className={styles.buyButton}>
            <span>BUY +</span>
          </button>
        </div>
      </div>
    </div>
  );
};
