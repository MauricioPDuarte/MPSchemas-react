import styled, { css } from 'styled-components';
import { shade, desaturate } from 'polished';

interface IContainerProps {
  disabled?: boolean;
}

export const Container = styled.button<IContainerProps>`
  width: 100%;
  border-radius: 4px;
  height: 56px;
  color: #fff;
  padding: 0 16px;

  background: var(--color-primary);

  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${shade(0.2, '#7B1FA2')};
  }

  ${(props) =>
    props.disabled &&
    css`
      background: ${desaturate(0.3, '#7B1FA2')};
      cursor: not-allowed;

      &:hover {
        background: ${desaturate(0.3, '#7B1FA2')};
      }
    `}
`;
