import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import * as S from "./style";

function WishlistItem({ id, name, images, company, price }) {
  return (
    <S.WishlistItem to={`/products/${id}`}>
      <div className="item-image">
        <img src={images[0].url} alt={name} />
      </div>

      <div className="item-info">
        <span>{company}</span>
        <h3>{name}</h3>
        <strong>{price.toLocaleString()}</strong>
      </div>

      <button className="delete-button" type="button">
        <FaRegTrashAlt size={18} />
      </button>
    </S.WishlistItem>
  );
}

export default WishlistItem;
