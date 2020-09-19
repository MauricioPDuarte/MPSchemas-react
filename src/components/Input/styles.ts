import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  border-radius: 5px;
  background: var(--color-elevation2);
  padding: 18px;
  border: 1px solid var(--color-elevation2);
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    width: 100%;
    color: #fff;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}

    ${(props) =>
    props.isErrored &&
    css`
      color: var(--color-error);
      border-color: var(--color-error);
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 4px;

  > svg {
    margin: 0;
    color: var(--color-error);
  }

  span {
    background: var(--color-error);
    color: var(--color-text-medium);

    &::before {
      border-color: var(--color-error) transparent;
    }
  }
`;
