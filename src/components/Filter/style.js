import styled from "styled-components";

export const SearchControl = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;

  input {
    flex-grow: 1;
    height: 34px;
    margin-right: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }

  button {
    flex-grow: 0;
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
  }
`;

export const MoreOptions = styled.div`
  padding: 0 20px 20px;

  .categories {
    margin-bottom: 16px;

    h2 {
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 700;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      button {
        width: 100%;
        padding: 6px 0;
        text-align: left;

        &.is-active {
          text-decoration: underline;
        }
      }
    }
  }

  .companies {
    margin-bottom: 16px;

    h2 {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 700;
    }

    select {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
  }

  .colors {
    margin-bottom: 16px;

    h2 {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 700;
    }

    .button-container {
      display: flex;
      align-items: center;
      gap: 6px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;

        &.is-active {
          text-decoration: underline;
        }

        &:first-child {
          text-transform: capitalize;
        }

        svg {
          fill: #fff;
        }
      }
    }
  }

  .price {
    margin-bottom: 16px;

    h2 {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 700;
    }

    p {
      margin-bottom: 8px;
    }
  }

  .shipping {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;

    label {
      font-size: 14px;
      font-weight: 700;
    }

    input {
      position: relative;
      top: 1px;
      margin-left: 8px;
    }
  }
`;

export const ResetButton = styled.button`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  background-color: #0081ff;
`;
