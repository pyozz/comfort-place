import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";

import * as S from "./style";

function CartContent() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <S.CartContent>
      <ol>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </ol>
    </S.CartContent>
  );
}

export default CartContent;
