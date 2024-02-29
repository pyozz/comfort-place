import styled from "styled-components";

export const LoginForm = styled.form`
  input,
  .login-button,
  .google-login-button {
    display: block;
    width: 80vw;
    height: 40px;
    max-width: 250px;
    border-radius: 4px;
  }

  input {
    border: 1px solid #d9d9d9;

    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }

  .login-button {
    margin-bottom: 12px;
    color: #fff;
    background-color: #0081ff;
  }

  .google-login-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
    border: 1px solid #d9d9d9;
  }

  .placeholder {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    font-weight: 400;

    .signup-link {
      font-size: 12px;
      font-weight: 700;
      text-decoration: underline;
    }
  }

  /* 
  button {
    &:first-of-type {
      margin-bottom: 6px;
      color: #fff;
      background-color: #0081ff;
    }

    &:last-of-type {
      border: 1px solid #d9d9d9;
    }
  } */
`;
