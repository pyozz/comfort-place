import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import logo from "@/assets/images/logo.svg";
import { auth } from "@/config/firebase.js";

import * as S from "./style";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <S.NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="편안플레이스" />
          </Link>

          {user ? (
            <div className="nav-link-wrapper">
              <Link to="wishlist">
                <FaHeart />
              </Link>

              <Link to="cart">
                <FaShoppingCart />
              </Link>

              <button type="button">로그아웃</button>
            </div>
          ) : (
            <Link to="login">로그인</Link>
          )}
        </div>
      </div>
    </S.NavContainer>
  );
}

export default Navbar;
