import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://roquereverso.files.wordpress.com/2017/01/animals.jpg" alt="Pink Floyd" />
      <div>
        <span>PLAYLIST</span>
        <h1>Pink Floyd</h1>
        <p>4 músicas</p>
        <button type="button">PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duration" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Pigs</td>
          <td>Pink Floyd</td>
          <td>Animals</td>
          <td>1:24</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Dogs</td>
          <td>Pink Floyd</td>
          <td>Animals</td>
          <td>17:05</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Pigs</td>
          <td>Pink Floyd</td>
          <td>Animals</td>
          <td>11:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Sheep</td>
          <td>Pink Floyd</td>
          <td>Animals</td>
          <td>10:19</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Pigs</td>
          <td>Pink Floyd</td>
          <td>Animals</td>
          <td>1:27</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
