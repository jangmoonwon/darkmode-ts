import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    body{
        background: ${({ theme }) => theme.mode.mainBackground};
        color: ${({ theme }) => theme.mode.text};
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 1.5;
        margin: 0 auto;
        word-break: keep-all;
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
    }
`;
