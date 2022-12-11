/* eslint-disable @next/next/no-img-element */
import styles from "./SlideItem.module.scss";

export function SlideItem({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="each-slide">
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="banner1" draggable={false} />
      </div>
    </div>
  );
}
