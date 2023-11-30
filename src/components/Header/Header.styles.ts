import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
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
