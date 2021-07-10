import styled from "styled-components";
import { colors } from "../../db.json";

export const Icone = styled.div`
  background-color: ${colors["dark-blue"]};
  height: 12vh;
  padding: 0.5rem;
  border-radius: 0 0 1.1rem 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  i {
    margin-right: 2rem;
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  p {
    display: flex;
    margin: auto;
    font-size: 1.5rem;
    color: ${colors.pink};
  }
  &:hover {
    font-weight: 800;
    border-bottom: 0.2rem solid ${colors.pink};
    opacity: 0.95;
  }

  @media screen and (max-width: 1000px) {
    p {
      display: none;
    }
    i {
      display: block;
      margin: auto;
    }
    a {
      cursor: pointer;
    }
  }
`;
