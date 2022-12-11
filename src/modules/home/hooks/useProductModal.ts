import { AppState } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../store/helper";
import { createSelector } from "reselect";
import { onToggleModal } from "../../../store/slices/productModalSlice";
import { Product } from "../../../utils/types";

export const useProductModal = () => {
  const dispatch = useAppDispatch();
  const productModalSelector = (state: AppState) => state.productModal;
  const isModalOpen = useAppSelector(createSelector(productModalSelector, (productModal) => productModal.isOpen));
  const product = useAppSelector(createSelector(productModalSelector, (productModal) => productModal.product));

  const handleToggleModal = ({ isOpen, product }: { isOpen: boolean; product: Product | null }) => {
    dispatch(onToggleModal({ isOpen, product }));
  };

  return { product, isModalOpen, handleToggleModal };
};
