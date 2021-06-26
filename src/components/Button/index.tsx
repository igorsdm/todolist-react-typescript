import { ButtonHTMLAttributes, FC } from 'react';

import { Container } from './styles';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
