import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

import * as S from "./style";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.LoginForm onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

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
