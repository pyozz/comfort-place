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
`;
