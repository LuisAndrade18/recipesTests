import React from "react";
import * as S from "./Style";

import RedVelvetCakeImg from "../../../../assets/image/redVelvet.png";
import MargheritaPizzaImg from "../../../../assets/image/pizza.png";
import PeanutSmoothieImg from "../../../../assets/image/peanut.png";

const recipesList = [
  {
    id: 1,
    image: RedVelvetCakeImg,
    title: "Red Velvet Cake",
  },
  {
    id: 2,
    image: MargheritaPizzaImg,
    title: "Margherita Pizza",
  },
  {
    id: 3,
    image: PeanutSmoothieImg,
    title: "Peanut Smoothie",
  },
];

const LatestRecipes = () => {
  return (
    <S.Container>
      <S.BoxRecipesTitle>
        <S.RecipesTitle>LATEST RECIPES</S.RecipesTitle>
        <S.HorizontalLine></S.HorizontalLine>
      </S.BoxRecipesTitle>
      <S.Card>
        {recipesList.map((item) => (
          <figure key={item.id}>
            <S.RecipeImg src={item.image} alt={item.title} />
            <span></span>
            <S.RecipeName>{item.title}</S.RecipeName>
          </figure>
        ))}
      </S.Card>
    </S.Container>
  );
};

export default LatestRecipes;
