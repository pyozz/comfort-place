import React, { useState } from "react";
import * as S from "./style";

function ProductImages({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <S.ProductImage>
      <img src={mainImage.url} alt="main image" />

      <S.Gallery>
        <div className="wrapper">
          {images.map((image, i) => {
            return (
              <button
                key={image.id}
                className={`thumbnail ${
                  image.url === mainImage.url ? "is-active" : null
                }`}
                type="button"
                onClick={() => setMainImage(images[i])}
              >
                <img src={image.url} alt={image.filename} />
              </button>
            );
          })}
        </div>
      </S.Gallery>
    </S.ProductImage>
  );
}

export default ProductImages;
