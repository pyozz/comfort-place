import React from "react";
import { ProductItem } from "@/common/Product";

function ProductSection({ products }) {
  return (
    <section>
      <ul>
        {products.map((product) => {
          return <ProductItem key={product.id} {...product} />;
        })}
      </ul>
    </section>
  );
}

export default ProductSection;
