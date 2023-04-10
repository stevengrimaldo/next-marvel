'use client';

import { createGlobalStyle } from 'styled-components';
import ResetStyles from './reset';

const GlobalStyles = createGlobalStyle`
${ResetStyles}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
`;

export default GlobalStyles;
