import classNames from "classnames";
import { useState, useRef } from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { Slide, SlideshowRef } from "react-slideshow-image";
import { SlideItem } from "../../components/SlideItem";
import { useGetSlider } from "../../hooks/useGetSlider";
import styles from "./HomeSlider.module.scss";

export const HomeSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carousel = useRef<SlideshowRef | null>();
  const { sliderItems } = useGetSlider();

  const onSlideChange = (_from: number, to: number) => {
    setActiveSlide(to);
  };

  const onIndicatorChange = (to: number) => {
    carousel.current?.goTo(to);
  };

  return (
    <section className={styles.sliderContainer}>
      <Slide ref={(ref) => (carousel.current = ref)} arrows={false} indicators={false} onChange={onSlideChange}>
        {sliderItems.map((sliderItem) => (
          <SlideItem key={sliderItem.id} imageUrl={sliderItem.imageUrl} />
        ))}
      </Slide>
      <ul>
        <li onClick={() => carousel.current?.goBack()}>
          <HiArrowNarrowLeft />
        </li>
        {sliderItems.map((sliderItem, index) => (
          <li
            key={sliderItem.id}
            className={classNames(styles.dot, { [styles.active]: activeSlide === index })}
            onClick={() => onIndicatorChange(index)}
          />
        ))}
        <li onClick={() => carousel.current?.goNext()}>
          <HiArrowNarrowRight />
        </li>
      </ul>
    </section>
  );
};
