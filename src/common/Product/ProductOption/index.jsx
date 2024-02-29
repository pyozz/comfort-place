import React, { useState } from "react";
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { cartActions } from "../../../store/slices/cartSlice";
import { wishlistActions } from "../../../store/slices/wishlistSlice";

import * as S from "./style";
import { useNavigate } from "react-router-dom";

function ProductOption({ singleProduct, colors }) {
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleAddItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        product: singleProduct,
        mainColor,
        amount,
      })
    );
  };

  const handleAddItemToWishlist = () => {
    dispatch(wishlistActions.addItemToWishlist(singleProduct));
    navigate("/wishlist");
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

      <S.CartButton to="/cart" onClick={handleAddItemToCart}>
        장바구니에 추가
      </S.CartButton>
      <S.HeartButton type="button" onClick={handleAddItemToWishlist}>
        찜하기
      </S.HeartButton>
    </S.Wrapper>
  );
}

export default ProductOption;
