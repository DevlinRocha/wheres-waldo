import { ThemeProvider } from 'styled-components';
import { Theme } from './components/styles/Theme';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/styles/Container.styled';

import WaldoGame from './components/WaldoGame';
import { Firestore } from '@firebase/firestore';

interface AppProps {
  db: Firestore,
}

export default function App(props: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <main>
        <Container>
          <WaldoGame db={props.db} />
        </Container>
      </main>
    </ThemeProvider>
  );
};