import React from 'react';
import { FiMoreHorizontal, FiAlertTriangle, FiHeart, FiDownloadCloud } from 'react-icons/fi';

import { Container, CardHeader, CardUser, CardContent, CardActions } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <CardContent>
        <CardHeader>
          <h3>ASUS GAMER U3C</h3>
          <p>Desktop</p>
        </CardHeader>

        <CardUser>
          <img
            alt="Mauricio Pruss"
            src="https://avatars2.githubusercontent.com/u/48035028?s=460&u=1471bb87310b3f46d9a332b08800a595e6b8abb4&v=4"
          />
          <div>
            <p>Mauricio Pruss Duarte</p>
            <button type="button">
              <FiMoreHorizontal size={14} />
            </button>
          </div>
        </CardUser>
      </CardContent>
      <CardActions>
        <button type="button">
          <FiAlertTriangle size={14} />
        </button>
        <button type="button">
          <FiHeart size={14} />
        </button>
        <button type="button">
          <FiDownloadCloud size={14} />
        </button>
      </CardActions>
    </Container>
  );
};

export default Card;
