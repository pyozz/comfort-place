import styled from "styled-components";

export const SingleProduct = styled.div`
  padding-bottom: 24px;

  .product-image {
    width: 100%;
    height: 220px;
    margin-bottom: 24px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-content {
    padding: 0 16px;
  }

  .product-info {
    margin-top: 76px;

    .company {
      display: inline-block;
      margin-bottom: 8px;
      font-size: 14px;
      color: #666666;
    }

    .name {
      margin-bottom: 16px;
      font-weight: 700;
      text-transform: capitalize;
    }

    .description {
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .price {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
