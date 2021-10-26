import { ThemeProvider } from 'styled-components';
import { Theme } from './components/styles/Theme';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/styles/Container.styled';

import WaldoGame from './components/WaldoGame';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
        <Container>
          <WaldoGame />
        </Container>
    </ThemeProvider>
  );
};