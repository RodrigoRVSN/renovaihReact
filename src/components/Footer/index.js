import React from "react"
import './styles.css';
import '../responsividade/styles.css';

export default class Index extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container-fluid footer-1">
                        <div className="row align-items-center">

                                <a className="textoRodape" href="/">Renovaíh</a>

                            <div className="col ">
                                <a href="/energias" className="btn btn-link textoRodape-2">Energia Renovável</a>
                                <a href="/sustentabilidade" className="btn btn-link textoRodape-2">Sustentabilidade</a>
                                <a href="/projetos" className="btn btn-link textoRodape-2">Projetos</a>
                            </div>

                            <div className="col icones">
                                <a href="facebook.com"><img className="icone" src="img/facebook.png" alt="" /></a>
                                <a href="youtube.com" className=""><img className="icone" src="img/youtube.png" alt="" /></a>
                                <a href="instagram.com" className=""> <img className="icone" src="img/instagram.png" alt="" /></a>
                            </div>

                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

