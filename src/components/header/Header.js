import React from 'react';
import MenuIcon from '../../assets/icons/menuIcon.png';
import * as S from './Style.js'

export default function Header() {
  return (
    <S.Header>
      <S.BoxMenuHamburger>
        <S.MenuHamburger src={MenuIcon} alt='Menu hamburger'/>
      </S.BoxMenuHamburger>
      <S.BoxTitle>
        <S.Title>RECIPES</S.Title>
      </S.BoxTitle>
    </S.Header>
  );
}