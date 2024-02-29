import React from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo.svg";

import * as S from "./style";

function Navbar() {
  return (
    <S.NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="편안플레이스" />
          </Link>

          {/* TODO: 비로그인 -> 로그인 버튼, 로그인 -> 위시리스트, 장바구니 버튼 */}
          <Link to="login">로그인</Link>
        </div>
      </div>
    </S.NavContainer>
  );
}

export default Navbar;
