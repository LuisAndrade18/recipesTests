import React from "react";
import * as S from "./Style";

import RedVelvetCakeImg from "../../../../assets/images/redVelvet.png";
import MargheritaPizzaImg from "../../../../assets/images/pizza.png";
import PeanutSmoothieImg from "../../../../assets/images/peanut.png";

const recipesList = [
  {
    image: RedVelvetCakeImg,
    title: "Red Velvet Cake",
  },
  {
    image: MargheritaPizzaImg,
    title: "Margherita Pizza",
  },
  {
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
        {recipesList.map((item, index) => (
          <figure key={index}>
            <S.RecipeImg src={item.image} alt={item.title} />
            <S.HorizontalLine></S.HorizontalLine>
            <S.RecipeName>{item.title}</S.RecipeName>
          </figure>
        ))}
      </S.Card>
    </S.Container>
  );
};

export default LatestRecipes;
