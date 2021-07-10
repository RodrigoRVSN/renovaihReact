import React from "react";
import "../responsividade/styles.css";
import styled from "styled-components";
import { colors } from "../../db.json";

const Icone = styled.div`
  background-color: ${colors["dark-blue"]};
  height: 12vh;
  padding: 1rem;
  border-radius: 0 0 1.1rem 1.1rem;
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
    margin: auto;
    align-items: center;
    color: ${colors.pink};
  }
  &:hover {
    font-weight: 800;
    p {
      font-size: 1.1rem;
    }
    border-bottom: 0.2rem solid ${colors.pink};
    opacity: 0.95;
  }

  @media screen and (max-width: 800px) {
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

export default class Index extends React.Component {
  render() {
    return (
      <>
        <header>
          <Icone>
            <a href="/projetos">
              <i className="fas fa-home fa-2x"></i>
              <p>VOLTAR</p>
            </a>
          </Icone>
        </header>
      </>
    );
  }
}
