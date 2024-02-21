import React, { useState } from "react";
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import * as S from "./style";

function ProductOption({ colors }) {
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const decrease = () => {
    setAmount((prevAmount) => {
      let newAmount = prevAmount - 1;
      if (newAmount < 1) newAmount = 1;

      return newAmount;
    });
  };

  const increase = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

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

      <div className="amount-buttons">
        <button type="button" onClick={decrease}>
          <FaMinus />
        </button>

        <h2>{amount}</h2>

        <button type="button" onClick={increase}>
          <FaPlus />
        </button>
      </div>

      <S.CartButton to="/cart">장바구니에 추가</S.CartButton>
    </S.Wrapper>
  );
}

export default ProductOption;
