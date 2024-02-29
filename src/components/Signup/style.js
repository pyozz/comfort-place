import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 700;
  }

  .placeholder {
    margin-bottom: 36px;
    font-size: 12px;

    a {
      display: inline-block;
      margin-bottom: 18px;
      margin-left: 4px;
      font-weight: 700;
      text-decoration: underline;
    }
  }

  .form-wrapper {
    &:not(:last-child) {
      margin-bottom: 12px;
    }

    label {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
    }

    input {
      display: block;
      width: 80vw;
      height: 40px;
      max-width: 250px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
  }

  .signup-button {
    width: 80vw;
    max-width: 250px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    background-color: #0081ff;
  }
`;
