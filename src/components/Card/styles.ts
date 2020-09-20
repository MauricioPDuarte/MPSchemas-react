import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-elevation1);
  border-radius: 15px;
  padding: 15px 20px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    position: absolute;
    height: 60%;
    width: 5px;
    left: 0;
    top: 20%;
    content: '';
    background: #1070ff;
    border-radius: 0 5px 5px 0;
  }
`;

export const CardContent = styled.div``;

export const CardHeader = styled.div`
  h3 {
    font-size: 16px;
    color: var(--color-text-high);
  }

  p {
    font-size: 12px;
    color: var(--color-text-medium);
  }
`;

export const CardUser = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }

  p {
    font-size: 12px;
    margin-bottom: -4px;
    font-weight: 600;
    color: var(--color-text-high);
  }

  button {
    background: transparent;

    svg {
      color: #fff;
      margin-top: 5px;
      transition: color 0.3s;

      &:hover {
        color: #7b1fa2;
      }
    }
  }
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background: transparent;

    & + button {
      margin-top: 8px;
    }

    svg {
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: #7b1fa2;
      }
    }
  }
`;
