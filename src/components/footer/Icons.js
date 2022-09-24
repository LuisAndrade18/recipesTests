import React from 'react';
import * as S from './Style';
import Insta from '../../assets/icons/instagramIcon.svg';
import Twitter from '../../assets/icons/twitterIcon.svg';
import Face from '../../assets/icons/facebookIcon.svg';
import Pint from '../../assets/icons/pinterestIcon.svg';

const Icons = () => {
  return (
    <S.Icons>
      <figure>
        <img src={Insta} alt="" />
      </figure>
      <figure>
        <img src={Twitter} alt="" />
      </figure>
      <figure>
        <img src={Face} alt="" />
      </figure>
      <figure>
        <img src={Pint} alt="" />
      </figure>
    </S.Icons>
  );
};

export default Icons;
