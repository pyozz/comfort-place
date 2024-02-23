import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartContent } from "@/components/Cart";

import * as S from "@/styles/pages/CartPageStyles.js";

function CartPage() {
  const { cart } = useSelector((state) => state.cart);

  if (cart.length < 1) {
    return (
      <S.Empty>
        <p>장바구니에 추가된 상품이 없습니다.</p>
        <Link to="/">상품 구경하러가기</Link>
      </S.Empty>
    );
  }

  return (
    <main>
      <CartContent />
    </main>
  );
}

export default CartPage;
