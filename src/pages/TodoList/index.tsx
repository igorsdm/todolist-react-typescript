import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface Inputs {
  ToDo: string;
  todoDescription: string;
}

export const TodoList: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Content>
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="ToDo"
            register={register}
            rules={{
              required: { value: true, message: 'Este campo é obrigatório' },
            }}
            defaultValue=""
            error={errors}
            placeholder="Tarefa"
          />

          <Input
            name="toDoDescription"
            register={register}
            rules={{
              required: {
                value: true,
                message: 'Este campo é obrigatório',
              },
            }}
            defaultValue=""
            error={errors}
            placeholder="Descrição"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Content>
    </Container>
  );
};
