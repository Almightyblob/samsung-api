import React, { FC } from "react";
import { useAppSelector } from "../store/hooks";

import ColorPickerr from "./ColorPickerr";

const DisplayResults: FC = () => {
  const selectedProduct = useAppSelector(
    (state) => state.selectProduct.selectedProduct
  );

  const filteredModel = useAppSelector(
    (state) => state.selectProduct.filteredModel
  );

  const displayData = () => {
    return filteredModel ? filteredModel : selectedProduct?.modelList[0];
  };

  console.log(displayData());

  return (
    <div className="w-full flex flex-row flex-wrap">
      {selectedProduct ? (
        <div className="w-full">
          <h1 className="text-5xl uppercase font-bold text-center my-8">
            {selectedProduct.fmyMarketingName}
          </h1>

          {selectedProduct.chipOptions[0].fmyChipType === "COLOR" ? (
            <ColorPickerr
              thumb-url={displayData()?.thumbUrl}
              thumb-url-alt={displayData()?.thumbUrl}
              color-options={selectedProduct?.chipOptions[0].optionList}
            ></ColorPickerr>
          ) : (
            ""
          )}

          {selectedProduct.chipOptions[1]?.optionList.map((option) => (
            <p key={option.optionCode}>{option.optionLocalName}</p>
          ))}

          <div className="flex flex-row flex-wrap justify-center px-20">
            {filteredModel ? (
              <div>
                <p>{filteredModel.displayName}</p>
                <p>
                  {filteredModel.fmyChipList[0].fmyChipType}{" "}
                  {filteredModel.fmyChipList[0].fmyChipName}
                </p>
                <p>{filteredModel.fmyChipList[1]?.fmyChipName}</p>
                <p>
                  {filteredModel.priceDisplay
                    ? filteredModel.priceDisplay
                    : "N/A"}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DisplayResults;
