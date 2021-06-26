import styled from 'styled-components';

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

export const ListBody = styled.div`
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

export const List = styled.div`
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
