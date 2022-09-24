import { createGlobalStyle } from "styled-components";
import Hurme from '../assets/fonts/HurmeRegular.otf';
import HurmeL from '../assets/fonts/HurmeLight.otf';
import HurmeSB from '../assets/fonts/HurmeSemiBold.otf';
import HurmeT from '../assets/fonts/HurmeThin.otf';


export const GLobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  @font-face {
    font-family: 'HURME GEOMETRIC';
    src: url('${Hurme}');
  }
  @font-face {
    font-family: 'HURME GEOMETRIC L.';
    src: url('${HurmeL}');
  }
  @font-face {
    font-family: 'HURME GEOMETRIC S.B.';
    src: url('${HurmeSB}');
  }
  @font-face {
    font-family: 'HURME GEOMETRIC T.';
    src: url('${HurmeT}');
  }
`;