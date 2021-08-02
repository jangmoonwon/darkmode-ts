import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: {
      mainBackground: string;
      borderColor: string;
      text: string;
      toggleShadow: string;
      toggleHover: string;
    };
  }
}
