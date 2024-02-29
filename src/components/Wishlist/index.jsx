import React from "react";
import { useSelector } from "react-redux";

import WishlistItem from "./WishlistItem";

import * as S from "./style";
import * as G from "@/styles/common.js";

function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <G.CenterWrapper>
      <S.Wishlist>
        <h2>위시리스트</h2>

        <ol>
          {wishlist.map((item) => {
            console.log(item);
            return <WishlistItem key={item.id} {...item} />;
          })}
        </ol>
      </S.Wishlist>
    </G.CenterWrapper>
  );
}

export default Wishlist;
