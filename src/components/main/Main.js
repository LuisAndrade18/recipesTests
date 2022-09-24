import React from "react";
import LatestRecipes from "./components/latestRecipes/LatestRecipes";
import * as S from "./Style.js";

export default function Main() {
  return (
    <S.Main>
      <LatestRecipes />
    </S.Main>
  );
}
