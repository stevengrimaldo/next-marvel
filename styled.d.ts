import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      gray: string;
      white: string;
      yellow: string;
    };
  }
}
