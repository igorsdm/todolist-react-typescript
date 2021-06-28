import { ButtonHTMLAttributes, FC } from 'react';
import { IconBaseProps } from 'react-icons';

import { StyledButton } from './styles';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  color: string;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  icon: Icon,
  color,
  ...rest
}) => (
  <StyledButton type="button" {...rest}>
    <Icon size="1.5rem" color={color} />
  </StyledButton>
);
