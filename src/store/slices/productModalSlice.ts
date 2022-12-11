import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";

export interface SidebarMenu {
  isOpen: boolean;
  product: Product | null;
}

const initialState: SidebarMenu = {
  isOpen: false,
  product: null,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    onToggleModal: (state, action: PayloadAction<SidebarMenu>) => {
      state.isOpen = action.payload.isOpen;
      state.product = action.payload.product;
    },
  },
});

export const { onToggleModal } = productModalSlice.actions;
export default productModalSlice.reducer;
