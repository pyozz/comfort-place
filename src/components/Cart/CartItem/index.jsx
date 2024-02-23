import React from "react";
import { useDispatch } from "react-redux";

import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { cartActions } from "../../../store/slices/cartSlice";

import * as S from "./style";

function CartItem({ id, name, image, color, quantity, totalPrice }) {
  const dispatch = useDispatch();

  const decrease = () => {
    dispatch(cartActions.toggleCartItemQuantity({ id, value: "decrease" }));
  };

  const increase = () => {
    dispatch(cartActions.toggleCartItemQuantity({ id, value: "increase" }));
  };

  const handleRemoveCartItem = () => {
    dispatch(cartActions.removeCartItem({ id }));
  };

  return (
    <S.CartItem>
      <div className="item-image">
        <img src={image} alt={name} />
      </div>

      <div className="item-info">
        <h3>{name}</h3>
        <p>
          색상 : <span style={{ backgroundColor: color }}></span>
        </p>
        <strong>{totalPrice?.toLocaleString()}</strong>
      </div>

      <div className="item-control">
        <div className="button-container">
          <button type="button" onClick={decrease}>
            <FaMinus />
          </button>
          <p>{quantity}</p>
          <button type="button" onClick={increase}>
            <FaPlus />
          </button>
        </div>

        <button
          className="delete-button"
          type="button"
          onClick={handleRemoveCartItem}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </S.CartItem>
  );
}

export default CartItem;
