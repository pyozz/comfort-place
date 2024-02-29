import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

import * as S from "./style";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <h2>회원가입</h2>

      <p className="placeholder">
        계정이 이미 있으신가요? <Link to="/login">로그인하러 가기</Link>
      </p>

      <p className="form-wrapper">
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>

      <p className="form-wrapper">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>

      <button className="signup-button" type="button" onClick={handleSignup}>
        가입하기
      </button>
    </S.Wrapper>
  );
}

export default Signup;
