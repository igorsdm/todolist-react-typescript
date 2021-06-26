import { FC, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, ListBody, List } from './styles';
import { TodoListContext } from '../../context/ToDoListsContext';

interface Inputs {
  name: string;
  description: string;
}

export const TodoList: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { list, addNewTodoItem } = useContext(TodoListContext);

  const onSubmit: SubmitHandler<Inputs> = data => {
    addNewTodoItem(data);
    reset();
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>To Do List</h1>
          <Input
            name="name"
            register={register}
            rules={{
              required: { value: true, message: 'Este campo é obrigatório' },
            }}
            defaultValue=""
            error={errors}
            placeholder="Tarefa"
            autoComplete="off"
          />

          <Input
            name="description"
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
            autoComplete="off"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Content>
      <ListBody>
        <List />
      </ListBody>
    </Container>
  );
};
