import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    fontFamily: {
      fontDefault: string;
    };
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    boxShadow: {
      primary: string;
    };
  }
}
