import React from "react";
import "./styles.css";
import "../responsividade/styles.css";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="container-fluid footer-1">
            <div className="row align-items-center">
              <div className="col">
                <a className="textoRodape" href="/">
                  Renovaíh
                </a>
              </div>

              <div className="col">
                <a href="/energias" className="btn btn-link textoRodape-2">
                  Energia Renovável
                </a>
                <a
                  href="/sustentabilidade"
                  className="btn btn-link textoRodape-2"
                >
                  Sustentabilidade
                </a>
                <a href="/projetos" className="btn btn-link textoRodape-2">
                  Projetos
                </a>
              </div>

              <section className="col">
                <a target="_blank" rel="noreferrer" href="facebook.com">
                  <img className="icone" src="img/facebook.png" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="youtube.com"
                  className=""
                >
                  <img className="icone" src="img/youtube.png" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/renovaih/"
                  className=""
                >
                  {" "}
                  <img className="icone" src="img/instagram.png" alt="" />
                </a>
              </section>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
