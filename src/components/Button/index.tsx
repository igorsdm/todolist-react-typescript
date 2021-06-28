import { ButtonHTMLAttributes, FC } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  colorScheme: string;
}

export const Button: FC<ButtonProps> = ({ children, colorScheme, ...rest }) => (
  <Container colorScheme={colorScheme} type="button" {...rest}>
    {children}
  </Container>
);
