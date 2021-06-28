import styled, { css } from 'styled-components';

import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    border: 0px solid;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 1.5rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
