import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar/index';
import Header from './components/Header/index';
import Player from './components/Player/index';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
