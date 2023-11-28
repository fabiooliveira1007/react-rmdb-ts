import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  color: var(--lightGrey);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--medGrey);
    border-radius: 4px;
    margin: 6px 0;
    padding: 10px;
  }

  .login-error {
    color: red;
  }
`;
