import { Link } from "react-router-dom";
import styled from "styled-components";

export const WishlistItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  .item-image {
    flex-grow: 0;
    flex-shrink: 0;
    width: 75px;
    height: 75px;
    margin-right: 12px;
    border-radius: 4px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item-info {
    span {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      color: #b3b3b3;
    }

    h3 {
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 700;
      text-transform: capitalize;
    }
  }

  .delete-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;
