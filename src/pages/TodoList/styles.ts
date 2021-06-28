import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ListItemProps {
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5vh;

  form {
    width: 80%;
    max-width: 22rem;
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  max-width: 44rem;
  width: 100%;
  background-color: #232129;
  padding: 0.5rem;
  border-radius: 10px 10px 0 0;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 44rem;

  padding: 1rem 2rem;

  p {
    margin: 0.7rem 0;
  }

  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    background: #f4f4f4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff9000;
    border-radius: 10px;
  }
`;

export const ListItem = styled.div<ListItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  margin: 0.7rem 0;

  background: ${({ disabled }) =>
    disabled ? shade(0.6, '#ff9000') : '#ff9000'};
  transition: background-color 0.2s;
  color: #312e38;

  border-radius: 10px;
  width: 100%;
  height: 5rem;

  cursor: pointer;

  ${props =>
    !props.disabled &&
    css`
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    `}
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 3.8rem;
`;

export const ListEmpty = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const TaskCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0.5rem 0;
`;
