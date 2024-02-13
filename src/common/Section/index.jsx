import React from "react";
import * as S from "./style";

function Section({ children }) {
  return (
    <S.Section>
      <div className="section-center">{children}</div>
    </S.Section>
  );
}

export default Section;
