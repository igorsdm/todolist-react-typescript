import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  colorScheme: string;
}

const colorSchemeButton = {
  default: {
    background: '#ff9000',
    color: '#312e38',
  },
  cancel: {
    background: '#c53030',
    color: '#f4ede8',
  },
};

export const Container = styled.button<ButtonProps>`
  background: ${({ colorScheme }) => colorSchemeButton[colorScheme].background};
  color: ${({ colorScheme }) => colorSchemeButton[colorScheme].color};
  height: 3rem;
  border-radius: 10px;
  border: 0;
  padding: 0 1rem;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ colorScheme }) =>
      shade(0.2, colorSchemeButton[colorScheme].background)};
  }
`;
