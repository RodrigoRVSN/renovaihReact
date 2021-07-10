import React from "react";
import "../responsividade/styles.css";

import { Icone } from "./style";

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
