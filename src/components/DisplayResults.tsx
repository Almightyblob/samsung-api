import React, { FC } from "react";
import { ModelList } from "../interfaces/samsung-interafce";
import { useAppSelector } from "../store/hooks";
import ShadowCard from "./styled/ShadowCard";

const DisplayResults: FC = () => {
  const selectedProduct = useAppSelector((state) => state.selectProduct.value);

  return (
    <div className="w-full flex flex-row flex-wrap">

    { selectedProduct ? 
    <div className="w-full">
        <h1 className="text-5xl uppercase font-bold text-center my-8">{selectedProduct.fmyMarketingName}</h1>
        <div className="flex flex-row flex-wrap justify-center px-20"> 
          {selectedProduct.modelList.map((model:ModelList) => (
            <ShadowCard key={model.modelCode}>           
              <p>{model.displayName}</p>
              <p>{model.fmyChipList[0].fmyChipType} {model.fmyChipList[0].fmyChipName}</p>
              <p>{model.fmyChipList[1]?.fmyChipName}</p>
              <img src={model.thumbUrl} alt={model.thumbUrlAlt} style={{maxWidth: '250px'}} />
              <p>{model.priceDisplay ? model.priceDisplay : 'N/A'}</p>
            </ShadowCard>)
            )
          }
        </div>
      </div>

      : <p></p>}
    </div>
  );
};

export default DisplayResults;

