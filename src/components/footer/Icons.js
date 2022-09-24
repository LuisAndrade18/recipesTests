import React from 'react'
import * as S from './Style';
import Insta from '../../assets/icons/instagramIcon.svg';
import Twitter from '../../assets/icons/twitterIcon.svg';
import Face from '../../assets/icons/facebookIcon.svg';
import Pint from '../../assets/icons/pinterestIcon.svg';

const Icons = () => {
  return (
    <S.Icons>
      <img src={Insta} alt="" />
      <img src={Twitter} alt="" />
      <img src={Face} alt="" />
      <img src={Pint} alt="" />
    </S.Icons>
  );
}

export default Icons