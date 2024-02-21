import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  .colors {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    span {
      margin-right: 8px;
    }

    .color-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #222;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 6px;
      }

      svg {
        fill: #fff;
      }
    }
  }

  .amount-buttons {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
    }

    h2 {
      padding-bottom: 4px;
    }

    *:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const CartButton = styled(Link)`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  background-color: #0081ff;
`;
