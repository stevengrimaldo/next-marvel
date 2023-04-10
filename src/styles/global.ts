'use client';

import { createGlobalStyle } from 'styled-components';
import ResetStyles from './reset';
import SlickStyles from './slick';

const GlobalStyles = createGlobalStyle`
${ResetStyles}
${SlickStyles}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
`;

export default GlobalStyles;
