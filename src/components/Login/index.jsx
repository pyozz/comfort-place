import React from "react";
import LoginForm from "./LoginForm";
import * as S from "./style";

function Login() {
  return (
    <S.Wrapper>
      <h1>편안 플레이스</h1>
      <p>
        &#91;편안플레이스&#93;와 함께 <br />
        <span>세련된 공간</span>을 만들어보고,
        <br />
        <span>특별한 순간</span>을 함께하세요!
      </p>

      <LoginForm />
    </S.Wrapper>
  );
}

export default Login;
