import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;

  span {
    width: 160px;
    background: var(--color-primary);
    padding: 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-text-medium);
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--color-primary) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
