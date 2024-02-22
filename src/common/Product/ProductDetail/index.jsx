import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

import ProductImages from "../ProductImages";
import ProductOption from "../ProductOption";

import * as S from "./style";

function ProductDetail() {
  const [singleProduct, setSingleProduct] = useState({});
  const productCollectionRef = collection(db, "product");

  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await getDocs(productCollectionRef);
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const target = data.find((item) => item.id === params.productId);

        setSingleProduct(target);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  return (
    <S.SingleProduct>
      {singleProduct.images && <ProductImages images={singleProduct.images} />}

      <div className="product-content">
        <div className="product-info">
          <span className="company">{singleProduct.company}</span>
          <h2 className="name">{singleProduct.name}</h2>
          <p className="description">{singleProduct.description}</p>
          <strong className="price">
            {singleProduct.price?.toLocaleString()} 원
          </strong>
        </div>

        <hr
          style={{
            margin: "18px 0",
            backgroundColor: "d9d9d9",
            opacity: 0.3,
          }}
        />

        {singleProduct.colors && (
          <ProductOption
            singleProduct={singleProduct}
            colors={singleProduct.colors}
          />
        )}
      </div>
    </S.SingleProduct>
  );
}

export default ProductDetail;
