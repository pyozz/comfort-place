import React from "react";
import { useSelector } from "react-redux";

import WishlistItem from "./WishlistItem";

import * as S from "./style";

function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <S.Wishlist>
      <h2>위시리스트</h2>

      <ol>
        {wishlist.map((item) => {
          console.log(item);
          return <WishlistItem key={item.id} {...item} />;
        })}
      </ol>
    </S.Wishlist>
  );
}

export default Wishlist;
