import React from "react";

import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import * as S from "./style";

function CartItem({ name, image, color, quantity, totalPrice }) {
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
        <strong>{totalPrice.toLocaleString()}</strong>
      </div>

      <div className="item-control">
        <div className="button-container">
          <button type="button">
            <FaMinus />
          </button>
          <p>{quantity}</p>
          <button type="button">
            <FaPlus />
          </button>
        </div>

        <button className="delete-button" type="button">
          <FaRegTrashAlt />
        </button>
      </div>
    </S.CartItem>
  );
}

export default CartItem;
