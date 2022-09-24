import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subs = styled.div`
  width: 100%;
  height: 60vh;
  color: #373737;
  background-color: #dfe4de;
  font-family: 'HURME GEOMETRIC';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2rem;
    font-family: 'HURME GEOMETRIC S.B.';
    letter-spacing: 4.2px;
  }
  h4 {
    font-size: 2rem;
    font-family: 'HURME GEOMETRIC T.';
    letter-spacing: 2px;
  }
  input {
    width: 95%;
    height: 8vh;
    border: none;
    margin: 16px;
  }
  input::placeholder {
    font-size: 18px;
    font-family: 'HURME GEOMETRIC T.';
    padding-left: 20px;
    color: #707070;
  }
  button {
    width: 95%;
    height: 9vh;
    letter-spacing: 6px;
    font-size: 1.2rem;
    background: none;
    border: solid 6px #373737;
  }
`;

export const Nav = styled.div`
width: 100%;
  font-family: 'HURME GEOMETRIC L.';
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  nav{
    margin: 30% 0 15%; 
  }
  ul {
    width: 100%;
    color: #373737;
    letter-spacing: 2.52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li {
    font-size: 1.5rem;
    cursor: pointer;
    margin: 15px;
    padding: 5px;
  }
  li:hover {
    background-color: #eff1ee;
  }
`;

export const Icons = styled.div`
  width: 70%;
  max-width: 400px;
  margin-bottom: 30%;
  display: flex;
  justify-content: space-between;
  img {
    width: 20%;
  }
`;

export const Copyrigth = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #446061;
  div {
    width: 94%;
    font-size: 0.52rem;
    word-break: break-all;
  }
`;
