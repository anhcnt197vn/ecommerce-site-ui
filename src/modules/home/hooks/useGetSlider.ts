import { useEffect, useState } from "react";
import { LocalStorageKey } from "../../../utils/constants";
import { Slide } from "../../../utils/types";

const defaultSliderItems: Slide[] = [
  {
    imageUrl: "/images/banner.jpg",
    id: 1,
  },
  {
    imageUrl: "/images/banner.jpg",
    id: 2,
  },
  {
    imageUrl: "/images/banner.jpg",
    id: 3,
  },
];

export const useGetSlider = () => {
  const [sliderItems, setSliderItems] = useState<Slide[]>([]);

  useEffect(() => {
    const sliderItems = localStorage.getItem(LocalStorageKey.SLIDER);
    if (sliderItems) {
      setSliderItems(JSON.parse(sliderItems));
    } else {
      setSliderItems(defaultSliderItems);
      localStorage.setItem(LocalStorageKey.SLIDER, JSON.stringify(defaultSliderItems));
    }
  }, []);

  return { sliderItems };
};
