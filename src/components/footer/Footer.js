import React from 'react';
import Subs from './Subs';
import Nav from './Nav'
import  Copyrigth from './Copyright';
import * as S from './Style';

const Footer = () => {
  return (
    <S.Footer>
      <Subs />
      <Nav />
      <Copyrigth/>
    </S.Footer>
  );
};

export default Footer;
