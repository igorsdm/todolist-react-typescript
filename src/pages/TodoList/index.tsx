import { useState, useEffect, useMemo, useContext, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { map, orderBy, filter } from 'lodash';
import { FiTrash2 } from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';

import { IList } from '../../interfaces/List';

import {
  Container,
  Content,
  ListBody,
  ListContainer,
  ListItem,
  ListInfo,
  ListActions,
  ListEmpty,
  TaskCounter,
} from './styles';
import { TodoListContext } from '../../context/ToDoListContext';

interface Inputs {
  name: string;
  description: string;
}

export const TodoList: FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const { list, addToDoItem, changeStatus, deleteToDoList, editToDoItem } =
    useContext(TodoListContext);

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (!editMode) {
      addToDoItem(data);
      reset();
    } else {
      const { name, description } = data;
      editToDoItem({ id: editId, name, description });
      setEditMode(false);
      setEditId('');
      reset();
    }
  };

  const handleChangeToDoStatus = (item: IList): void => {
    changeStatus(item);
  };

  const handleDeleteTodoItem = (item: IList): void => {
    deleteToDoList(item);
  };

  const handleEditTodoItem = (item: IList): void => {
    setEditMode(true);
    setValue('name', item.name);
    setValue('description', item.description);
  };

  const orderedList = useMemo(() => {
    return orderBy(list, ['done'], ['asc']);
  }, [list]);

  const doneTasks = useMemo(() => {
    return filter(list, ['done', true]).length;
  }, [list]);

  useEffect(() => {
    reset();
  }, [orderedList, reset]);

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>To Do List</h1>
          <Input
            name="name"
            register={register}
            rules={{
              required: {
                value: true,
                message: 'Este campo é obrigatório',
              },
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
          <Button colorScheme="default" type="submit">
            <span>{editMode ? 'Editar' : 'Salvar'}</span>
          </Button>
          {editMode ? (
            <Button
              colorScheme="cancel"
              type="button"
              style={{ marginBottom: '0.5rem' }}
              onClick={() => {
                setEditMode(false);
                setEditId('');
                reset();
              }}
            >
              <span>Cancelar</span>
            </Button>
          ) : (
            <TaskCounter>
              <p>Tarefas: {orderedList.length}</p>
              <p>Feitas: {doneTasks}</p>
              <p>Pendentes: {orderedList.length - doneTasks}</p>
            </TaskCounter>
          )}
        </form>
      </Content>
      <ListContainer>
        {orderedList.length ? (
          <ListBody>
            {map(orderedList, item => {
              return (
                <ListItem
                  key={item.id}
                  disabled={item.done}
                  onClick={() => handleChangeToDoStatus(item)}
                >
                  <ListInfo>
                    <strong>{item.name}</strong>
                    <span>{item.description}</span>
                  </ListInfo>
                  <ListActions>
                    <ButtonIcon
                      icon={GoPencil}
                      color="#312e38"
                      onClick={e => {
                        e.stopPropagation();
                        setEditId(item.id);
                        handleEditTodoItem(item);
                      }}
                    />
                    <ButtonIcon
                      icon={FiTrash2}
                      color="#312e38"
                      onClick={e => {
                        e.stopPropagation();
                        handleDeleteTodoItem(item);
                      }}
                    />
                  </ListActions>
                </ListItem>
              );
            })}
          </ListBody>
        ) : (
          <ListEmpty>Não há itens em sua lista!</ListEmpty>
        )}
      </ListContainer>
    </Container>
  );
};
