import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: auto;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;