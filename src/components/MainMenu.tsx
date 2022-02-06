import React, { FC } from "react";
import { ProductList } from "../interfaces/samsung-interafce";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectProduct } from "../features/products-slice";
import { useGetAllProductsQuery } from "../features/api-slice";
import TopBar from "./styled/TopBar";
import MenuItem from "./styled/MenuItem";

const MainMenu: FC = () => {
  const { data } = useGetAllProductsQuery();
  const dispatch = useAppDispatch();
  const productData = data?.response.resultData.productList;

  const selectedProduct = useAppSelector((state) => state.selectProduct.value);

  function setProduct(product: ProductList) {
    dispatch(selectProduct(product));
  }

  return (
    <TopBar>
      {productData ? (
        productData.map((product: ProductList) => (
          <MenuItem
            key={product.fmyMarketingName}
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
    </TopBar>
  );
};

export default MainMenu;
