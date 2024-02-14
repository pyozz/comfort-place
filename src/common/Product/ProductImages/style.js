import styled from "styled-components";

export const ProductImage = styled.div`
  width: 100%;
  height: 220px;
  margin-bottom: 24px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Gallery = styled.div`
  padding: 0 16px;
  margin-top: 12px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .wrapper {
    display: inline-flex;
  }

  .thumbnail {
    width: 64px;
    height: 50px;
    border-radius: 4px;
    overflow: hidden;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  img {
    display: block;
  }
`;
