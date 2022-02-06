import React, { FC } from "react";
import { ProductList } from "../interfaces/samsung-interafce";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectProduct, resetModel } from "../features/products-slice";
import { useGetAllProductsQuery } from "../features/api-slice";
import MenuBar from "./styled/MenuBar";
import MenuItem from "./styled/MenuItem";

const MainMenu: FC = () => {
  const { data } = useGetAllProductsQuery();
  const dispatch = useAppDispatch();
  const productData = data?.response.resultData.productList;

  const selectedProduct = useAppSelector(
    (state) => state.selectProduct.selectedProduct
  );

  function setProduct(product: ProductList): void {
    dispatch(resetModel());
    dispatch(selectProduct(product));
  }

  return (
    <MenuBar>
      {productData ? (
        productData.map((product: ProductList) => (
          <MenuItem
            key={product.familyRecord}
            active={
              product.fmyMarketingName === selectedProduct?.fmyMarketingName
            }
            onClick={() => setProduct(product)}
          >
            {product.fmyMarketingName}
          </MenuItem>
        ))
      ) : (
        <p>One moment please...</p>
      )}
    </MenuBar>
  );
};

export default MainMenu;
