import React from "react";
import { useLocation } from "react-router-dom";

import * as S from "./style";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;

  console.log(product);

  return (
    <S.SingleProduct className="single-product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="company">{product.company}</span>
        <h2 className="name">{product.name}</h2>
        <p className="description">{product.description}</p>
        <strong className="price">{product.price.toLocaleString()} 원</strong>
      </div>
    </S.SingleProduct>
  );
}

export default ProductDetail;
