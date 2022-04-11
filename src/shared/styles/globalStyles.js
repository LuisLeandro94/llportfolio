import { createGlobalStyle } from 'styled-components';
import '../fonts/aqua.ttf';
import '../fonts/Roboto-Thin.ttf';
import '../fonts/Roboto-ThinItalic.ttf';
import { PageBackground } from './_colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${PageBackground};
  }
  @font-face {
    font-family: 'Aqua Grotesque';
    src: url('AquaGrotesque.woff2') format('woff2'),
        url('AquaGrotesque.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('Roboto-ThinItalic.woff2') format('woff2'),
        url('Roboto-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('Roboto-Thin.woff2') format('woff2'),
        url('Roboto-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

`;

export default GlobalStyle;
