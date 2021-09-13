import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  h1 {
    margin-bottom: 4rem;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;
      h2 {
        margin: 0 50px 0px 50px;
      }
    }
  }
`;