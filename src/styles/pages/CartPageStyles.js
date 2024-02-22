import styled from "styled-components";

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100vh;

  p {
    font-weight: 700;
  }

  a {
    display: block;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #0081ff;
  }
`;
