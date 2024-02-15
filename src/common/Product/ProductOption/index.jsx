import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import * as S from "./style";

function ProductOption({ colors }) {
  const [mainColor, setMainColor] = useState(colors[0]);

  console.log(colors);
  return (
    <S.Wrapper>
      <div className="colors">
        <span>colors :</span>

        {colors?.map((color, i) => {
          return (
            <button
              key={i}
              className="color-button"
              type="button"
              style={{ backgroundColor: color }}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color && <FaCheck size={12} />}
            </button>
          );
        })}
      </div>
    </S.Wrapper>
  );
}

export default ProductOption;
