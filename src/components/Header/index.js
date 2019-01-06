import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars3.githubusercontent.com/u/2532291?v=4" alt="Usuário Logado" />
      Leonardo Brito
    </User>
  </Container>
);

export default Header;
