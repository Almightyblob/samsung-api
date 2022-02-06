import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelList, ProductList } from "../interfaces/samsung-interafce";

interface SelectedProductState {
  selectedProduct: ProductList | null;
  filteredModel: ModelList | null;
}

const initialState: SelectedProductState = {
  selectedProduct: null,
  filteredModel: null,
};

const selectProductSlice = createSlice({
  name: "selectProduct",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<ProductList>) {
      state.selectedProduct = action.payload;
    },
    filterModel(state, action: PayloadAction<ModelList | null>) {
      state.filteredModel = action.payload;
    },
    resetModel(state) {
      state.filteredModel = null;
    },
  },
});

export const { selectProduct, filterModel, resetModel } =
  selectProductSlice.actions;

export default selectProductSlice.reducer;
