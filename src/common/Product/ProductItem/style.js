import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCard = styled(Link)`
  display: block;

  .card-image {
    width: 100%;
    height: 240px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-info {
    padding: 12px 0;

    .company {
      display: block;
      margin-bottom: 2px;
      font-size: 12px;
      color: #b4b4b8;
    }

    .name {
      margin-bottom: 12px;
      font-size: 13px;
      font-weight: 400;
      text-transform: capitalize;
    }

    .price {
      display: block;
      font-size: 15px;
      font-weight: 700;
    }

    .shipping {
      display: inline-block;
      padding: 2px 4px;
      margin-top: 12px;
      border-radius: 4px;
      font-size: 10px;
      background-color: #d9d9d9;
    }
  }
`;
