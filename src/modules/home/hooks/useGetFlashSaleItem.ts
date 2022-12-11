import { useEffect, useState } from "react";
import { LocalStorageKey } from "../../../utils/constants";
import { Product } from "../../../utils/types";

const defaultFlashSaleItem: Product[] = [
  {
    id: 1,
    productName: "White Traditional Long Dress",
    price: 3.99,
    oldPrice: 4.99,
    sizes: ["XL", "M"],
    colors: ["white", "red", "yellow"],
  },
  {
    id: 2,
    productName: "Red Traditional Long Dress",
    price: 2.99,
    oldPrice: 4.99,
    sizes: ["FreeSize"],
    colors: ["red", "brown"],
  },
  {
    id: 3,
    productName: "Blue Traditional Long Dress",
    price: 1.99,
    oldPrice: 5.99,
    sizes: ["XXL", "M", "S", "L"],
    colors: ["blue"],
  },
  {
    id: 4,
    productName: "Black Traditional Long Dress",
    price: 4.99,
    oldPrice: 6.99,
    sizes: ["S", "M"],
    colors: ["blue", "white", "red"],
  },
];

export const useGetFlashSaleItem = () => {
  const [flashSaleItems, setFlashSaleItems] = useState<Product[]>([]);

  useEffect(() => {
    const flashSaleItems = localStorage.getItem(LocalStorageKey.FLASH_SALE_ITEMS);
    if (flashSaleItems) {
      setFlashSaleItems(JSON.parse(flashSaleItems));
    } else {
      setFlashSaleItems(defaultFlashSaleItem);
      localStorage.setItem(LocalStorageKey.FLASH_SALE_ITEMS, JSON.stringify(defaultFlashSaleItem));
    }
  }, []);

  return { flashSaleItems };
};
