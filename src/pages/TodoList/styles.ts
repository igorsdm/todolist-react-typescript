import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 5rem;

  form {
    margin: 2rem 0;
    width: 80%;
    max-width: 350px;
    text-align: center;
  }
`;
