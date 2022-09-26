import React from "react";
//import LogoDesktop from "../../assets/icons/RC.svg";
import MenuIcon from "../../assets/icons/menuIcon.svg";
import * as S from "./Style.js";

export default function Header() {
  return (
    <S.Header>
      <nav>
        <S.BoxMenuHamburger>
          <S.MenuHamburger src={MenuIcon} alt="Menu hamburger" />
          <S.MenuMobileContent>
            <S.BoxMobileList>
              <S.MenuMobileItem>ABOUT</S.MenuMobileItem>
              <S.MenuMobileItem>RECIPES</S.MenuMobileItem>
              <li>
                <S.SubscribesButton>SUBSCRIBES</S.SubscribesButton>
              </li>
            </S.BoxMobileList>
          </S.MenuMobileContent>
        </S.BoxMenuHamburger>
      </nav>
      <S.BoxTitle>
        <S.Title>RECIPES</S.Title>
      </S.BoxTitle>
    </S.Header>
  );
}
