import { useState, useCallback, InputHTMLAttributes, FC } from 'react';

import { UseFormRegister } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: Record<string, Record<string, unknown>>;
  register: UseFormRegister<any>;
  rules: Record<string, unknown>;
}

const Input: FC<InputProps> = ({ name, error, register, rules, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isErrored={!!error[name]} isFocused={isFocused}>
      <input
        {...register(name, rules)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
      {error[name] && (
        <Error title={error[name].message}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};
export default Input;
