import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductList } from "../interfaces/samsung-interafce";

interface SelectedProductState {
  value: ProductList | null;
}

const initialState: SelectedProductState = {
  value: null,
};

const selectProductSlice = createSlice({
  name: "selectProduct",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<ProductList>) {
      state.value = action.payload;
    },
  },
});

export const { selectProduct } = selectProductSlice.actions;

export default selectProductSlice.reducer;
