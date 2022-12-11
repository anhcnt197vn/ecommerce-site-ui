import { IoIosFlash } from "react-icons/io";
import styles from "./HomeFlashSale.module.scss";
import { ProductCard } from "../../components/ProductCard";
import { Countdown } from "../../components/Countdown";
import { useGetFlashSaleItem } from "../../hooks/useGetFlashSaleItem";

export const HomeFlashSale: React.FC = () => {
  const { flashSaleItems } = useGetFlashSaleItem();

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <IoIosFlash fontSize={20} />
        <h3 className={styles.title}>Flash Sale</h3>
        <Countdown />
      </div>
      <div className={styles.productContainer}>
        {flashSaleItems.map((flashSaleItem) => (
          <ProductCard item={flashSaleItem} key={flashSaleItem.id} />
        ))}
      </div>
    </section>
  );
};
