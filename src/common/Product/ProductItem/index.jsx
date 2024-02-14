import React from "react";
import * as S from "./style";

function ProductItem({ products, id, image, company, name, price, shipping }) {
  return (
    <li style={{ marginBottom: "20px" }}>
      <S.ProductCard to={`/products/${id}`}>
        <div className="card-image">
          <img src={image} alt={name} />
        </div>

        <div className="card-info">
          <span className="company">{company}</span>
          <h2 className="name">{name}</h2>
          <strong className="price">{price.toLocaleString()}</strong>
          {shipping && <span className="shipping">무료배송</span>}
        </div>
      </S.ProductCard>
    </li>
  );
}

export default ProductItem;
