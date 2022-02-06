import React, { FC } from "react";
import { useAppSelector } from "../store/hooks";
import ColorPicker from "./ColorPicker";
import VariationPill from "./styled/VariationPill";
import ListItem from "./styled/ListItem";
import LinkButton from "./styled/LinkButton";
import ImageCarousel from "./ImageCarousel";

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
    <div className="w-full xl:w-3/4 xl:mx-auto">
      {selectedProduct ? (
        <div className="w-full ">
          <h1 className="text-5xl text-zinc-800 uppercase font-bold text-center my-16">
            {selectedProduct.fmyMarketingName}
          </h1>

          <div className="flex flex-col-reverse xl:flex-row justify-around items-center xl:divide-x border-zinc-400">
            <div className="w-1/2 flex justify-center">
              <ul className="list-disc">
                {displayData()?.usp.map((usp, index) => (
                  <ListItem medium key={index}>
                    {usp}
                  </ListItem>
                ))}
              </ul>
            </div>

            {selectedProduct.chipOptions[0].fmyChipType === "COLOR" ? (
              <div className="w-1/2 flex justify-center mb-8 xl:mb-0">
                <ColorPicker
                  thumb-url={displayData()?.thumbUrl}
                  thumb-url-alt={displayData()?.thumbUrlAlt}
                  color-options={selectedProduct?.chipOptions[0].optionList}
                ></ColorPicker>
              </div>
            ) : (
              <div className="w-1/2 flex justify-center">
                <img
                  src={displayData()?.thumbUrl}
                  alt={displayData()?.thumbUrlAlt}
                  style={{ maxHeight: "330px" }}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center my-12 | xl:flex-row xl:justify-start xl:items-end">
            <h2 className="text-xl text-zinc-600 font-semibold mb-4 | xl:mb-0 xl:mx-8">
              Variaties:
            </h2>

            <div className="flex items-center space-x-8">
              {selectedProduct.chipOptions[1]
                ? selectedProduct.chipOptions[1]?.optionList.map((option) => (
                    <VariationPill key={option.optionCode}>
                      <p>{option.optionLocalName}</p>
                    </VariationPill>
                  ))
                : selectedProduct.chipOptions[0]?.optionList.map((option) => (
                    <VariationPill key={option.optionCode}>
                      <p>{option.optionLocalName}</p>
                    </VariationPill>
                  ))}
            </div>
          </div>

          <div className="flex flex-col bg-zinc-100 space-x-8 mx-auto my-12 p-4 | xl:flex-row xl:justify-center xl:rounded-md">
            <div className="w-full | xl:w-1/2">
              <ImageCarousel images={displayData()!.galleryImage} />
            </div>

            <div className="w-full flex justify-center items-center  px-12 py-6 | xl:w-1/2">
              {displayData() ? (
                <div className="h-full w-full flex flex-col justify-between border border-zinc-300 rounded-md p-12">
                  <ul className="list-disc ml-4 mb-4">
                    <ListItem>Model: {displayData()?.modelCode}</ListItem>
                    <ListItem>
                      Score: {displayData()?.ratings} (
                      {displayData()?.reviewCount} Beoordelingen)
                    </ListItem>
                    <ListItem>
                      Op vooraad:{" "}
                      {displayData()?.stockStatusText ? "Ja" : "Nee"}
                    </ListItem>
                    <ListItem>
                      Prijs vanaf:{" "}
                      {displayData()?.priceDisplay
                        ? displayData()?.priceDisplay
                        : "N/A"}
                    </ListItem>
                  </ul>

                  <div className="flex flex-col space-y-4">
                    <LinkButton
                      href={`https://samsung.com/${displayData()?.reviewUrl}`}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      Lees de reviews
                    </LinkButton>

                    <LinkButton
                      href={`https://samsung.com/${displayData()?.pdpUrl}`}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      Naar de product page
                    </LinkButton>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DisplayResults;
