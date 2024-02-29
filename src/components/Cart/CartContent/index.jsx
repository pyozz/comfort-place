import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";

import * as S from "./style";
import * as G from "@/styles/common.js";

function CartContent() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <G.CenterWrapper>
      <S.CartContent>
        <h2>장바구니</h2>

        <ol>
          {cart.map((cartItem) => {
            return <CartItem key={cartItem.id} {...cartItem} />;
          })}
        </ol>
      </S.CartContent>
    </G.CenterWrapper>
  );
}

export default CartContent;
