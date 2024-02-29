import React from "react";
import { FcGoogle } from "react-icons/fc";
import * as S from "./style";

function LoginForm() {
  return (
    <S.LoginForm>
      <input type="text" />
      <input type="password" />

      <button className="login-button" type="submit">
        로그인
      </button>

      <button className="google-login-button" type="button">
        <FcGoogle size={20} />
        Google로 시작하기
      </button>

      <p className="placeholder">
        아직 회원이 아니신가요?{" "}
        <button className="signup-link">회원가입 하러가기</button>
      </p>
    </S.LoginForm>
  );
}

export default LoginForm;
