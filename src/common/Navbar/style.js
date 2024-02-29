import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-bottom: 1px solid #dedede;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:first-child {
      display: block;
      width: 90px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .nav-link-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;

    a {
      position: relative;
      width: auto !important;

      span {
        position: absolute;
        top: -4px;
        right: -4px;
        min-width: 12px;
        height: 12px;
        padding: 0 4px;
        border-radius: 10000px;
        color: #fff;
        font-size: 12px;
        text-align: center;

        background-color: red;
      }
    }
  }
`;
