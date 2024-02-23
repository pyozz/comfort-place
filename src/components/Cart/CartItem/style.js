import styled from "styled-components";

export const CartItem = styled.li`
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
    flex-grow: 1;
    padding-right: 70px;

    h3 {
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 700;
      text-transform: capitalize;
    }

    p {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 12px;

      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 4px;
        border-radius: 50%;
      }
    }
  }

  .item-control {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 70px;
    height: 100%;
    padding-right: 20px;

    .button-container {
      display: flex;

      p {
        margin: 0 6px;
      }
    }
  }
`;
