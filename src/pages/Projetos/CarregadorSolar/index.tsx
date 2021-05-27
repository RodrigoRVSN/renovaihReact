import '../../../components/responsividade/styles.css';
import BackToHome from '../../../components/BackToHome';
import { Parent, Sidebar, Content, Descricao } from './styles';
import { Gif } from '../../../components/Gif';
import { ProgressBar } from '../../../components/ProgressBar';

export default function CarregadorSolar() {
    return (
        <>
            <Parent>
                <Sidebar>

                    <BackToHome />

                </Sidebar>

                <ProgressBar total={6} />

                <Content>
                    <Descricao>
                        <div className="container">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h2>Carregador de celular com energia <span>Solar</span></h2>
                                        <h3>Carregue o seu celular <span>com a luz do Sol</span> </h3>
                                        <p>Nível de Dificuldade: Médio </p>
                                        <p>Para iniciar a sua missão, assista o video abaixo e e clique na seta azul para a direita!</p>
                                        <div className="container text-center">
                                            <iframe src="https://www.youtube.com/embed/zc-N13YEqlk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>

                                    </div>
                                    <div className="carousel-item">
                                        <h2>Materiais <span>Utilizados</span></h2>
                                        <h3>Lista de materiais a serem utilizados <span>para o desenvolvimento do projeto</span> </h3>
                                        <p>
                                            <ul>
                                                <li>2 placas fotovoltaicas de 6 volts e 3 watts ou 1 de 12 volts</li>
                                                <li>Adaptador USB (carregador de carro)</li>
                                                <li>Fios de cobre</li>
                                                <li>Fitas isolantes</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>1</span></h2>
                                        <h3>Vamos começar a <span>aventura</span> </h3>
                                        <p>
                                            Fixe os fios de cobre nas placas fotovoltaicas
                            </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>2</span></h2>
                                        <p>
                                            Ligar o Adaptador USB aos fios de cobre
                            </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>3</span></h2>
                                        <h3>Peça ajuda para um adulto <span>e mão na massa</span> </h3>
                                        <p>
                                            Ligar as placas em paralelo ao adaptador USB
                            </p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>4</span></h2>
                                        <h3>Prontinho, <span>feito!</span> </h3>
                                        <p>Hora de testar!. </p>
                                        <p>Espero que você tenha conseguido.</p>
                                        <h3>Temos muitos outros projetos esperando por você, <span>nos vemos em breve!</span> </h3>
                                        <Gif/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Descricao>
                </Content>
            </Parent>
        </>
    );
}

