import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px 0;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  color: var(--white);
`;

export const Login = styled.div`
  font-size: var(--fontSmall);
 
  span {
    color: var(--lightGrey);
  }

  .login {
    cursor: pointer;
    border: 1px solid var(--medGrey);
    border-radius: 4px;
    padding: 4px 8px;

    &:hover {
      background-color: var(--medGrey);
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    max-width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
