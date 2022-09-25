import styled from "styled-components";
import Background from "../../assets/images/background.png";

export const Header = styled.header`
  height: 53rem;
  margin: 1rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  background-size: cover;
  background-position: 80%;
  background-repeat: no-repeat;
  font-family: 'HURME GEOMETRIC';
`;

export const BoxMenuHamburger = styled.figure`
  text-align: end;
`;

export const MenuHamburger = styled.img`
  width: 2rem;
  margin: 1.4rem 0.5rem 0 0;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49.6rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;
