import React from "react";

import { ProductItem } from "@/common/Product";
import Section from "../../Section";

function ProductSection({ products }) {
  return (
    <Section>
      <ul>
        {products.map((product) => {
          return (
            <ProductItem key={product.id} products={products} {...product} />
          );
        })}
      </ul>
    </Section>
  );
}

export default ProductSection;
