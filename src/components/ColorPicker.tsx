import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filterModel } from "../features/products-slice";
import { ModelList, OptionList } from "../interfaces/samsung-interafce";
import ColorButton from "./styled/ColorButton";
import _ from "lodash";

interface ColorPickerProps {
  "color-options"?: OptionList[];
  "thumb-url"?: string;
  "thumb-url-alt"?: string;
}

const ColorPicker: FC<ColorPickerProps> = (props) => {
  const dispatch = useAppDispatch();

  const selectedProduct = useAppSelector(
    (state) => state.selectProduct.selectedProduct
  );

  function filterByType(type: string): ModelList | null {
    const result: ModelList | undefined = _.find(selectedProduct?.modelList, {
      fmyChipList: [{ fmyChipName: type }],
    });

    if (result === undefined) {
      return null;
    }

    return result;
  }

  console.log(props);

  function filter(type: string): void {
    console.log(type);
    dispatch(filterModel(filterByType(type)));
  }

  return (
    <div className="flex flex-row items-center space-y-2">
      <img
        src={props["thumb-url"]}
        alt={props["thumb-url-alt"]}
        style={{ maxHeight: "330px" }}
      />
      <div>
        {props["color-options"]?.map((option) => (
          <div
            key={option.optionCode}
            className="flex flex-col items-center mb-4"
          >
            <ColorButton
              color={option.optionCode}
              onClick={() => filter(option.optionLocalName)}
            />
            <p>{option.optionLocalName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
