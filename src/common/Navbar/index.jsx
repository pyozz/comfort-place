import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

import logo from "@/assets/images/logo.svg";
import { auth } from "@/config/firebase.js";
import { signOut } from "firebase/auth";

import * as S from "./style";

function Navbar() {
  const [user, setUser] = useState(null);

  const cart = useSelector((state) => state.cart.cart);
  const cartSum = cart.reduce((total, obj) => total + obj.quantity, 0);

  const wishlistSum = useSelector((state) => state.wishlist.wishlist).length;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

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
                <span>{wishlistSum}</span>
                <FaHeart />
              </Link>

              <Link to="cart">
                <span>{cartSum}</span>
                <FaShoppingCart />
              </Link>

              <button type="button" onClick={handleLogout}>
                로그아웃
              </button>
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
