import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist href="">
        <img src="https://roquereverso.files.wordpress.com/2017/01/animals.jpg" alt="Pink Floyd" />
        <strong>Rock dos bons</strong>
        <p>Rlx enquanto escuta esse som, mas melhores da atualidade.</p>
      </Playlist>
      <Playlist href="">
        <img src="https://roquereverso.files.wordpress.com/2017/01/animals.jpg" alt="Pink Floyd" />
        <strong>Rock dos bons</strong>
        <p>Rlx enquanto escuta esse som, mas melhores da atualidade.</p>
      </Playlist>
      <Playlist href="">
        <img src="https://roquereverso.files.wordpress.com/2017/01/animals.jpg" alt="Pink Floyd" />
        <strong>Rock dos bons</strong>
        <p>Rlx enquanto escuta esse som, mas melhores da atualidade.</p>
      </Playlist>
      <Playlist href="">
        <img src="https://roquereverso.files.wordpress.com/2017/01/animals.jpg" alt="Pink Floyd" />
        <strong>Rock dos bons</strong>
        <p>Rlx enquanto escuta esse som, mas melhores da atualidade.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
