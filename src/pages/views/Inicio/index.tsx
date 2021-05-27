/* import video from '../../../img/video/education.mp4'; */
import '../../../components/responsividade/styles.css';
import { Button } from '../../../components/Button/index';
import { CardBody, Cardes, Video, Card } from './styles';
import styled from 'styled-components';

import { colors } from '../../../db.json';

const DescriptionHome = styled.h2`
    font-size: 1.5rem;
    color: ${colors.purple};
    font-weight: 800;
`;

export default function Inicio() {
    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <section className="carousel-inner">
                    <div className="carousel-item active">

                        <Video autoPlay loop muted>
                            <source src='../../../img/video/education.mp4' type='video/mp4' />
                        </Video>
                        <header>
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="text-font">Renovaíh</h3>
                                <DescriptionHome>- Por um mundo sustentável -</DescriptionHome>
                                <a href="/projetos"><Button>Clique aqui para navegar em nossos projetos.</Button></a>
                            </div>
                        </header>
                    </div>
                </section>

                <Cardes className="container-lg mt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <a className="link" href="/projetos">
                                <Card className="border h-40">
                                    <img width="40%" height="40%" src="img/handson.jpg" className="card-img-top" alt="..." />
                                    <CardBody>
                                        <h2>Mão na massa</h2>
                                        <h3>Vamos realizar projetos que envolvam a sustentabilidade!</h3>
                                        <Button>Bora trabalhar!</Button>
                                    </CardBody>
                                </Card>
                            </a>
                        </div>
                        <div className="col">
                            <a className="link" href="/sustentabilidade">
                                <Card className="card h-40">
                                    <img width="40%" height="40%" src="img/sustentabilidade.jpg" className="card-img-top" alt="..." />
                                    <CardBody>
                                        <h2>Sustentabilidade</h2>
                                        <h3>Você sabe o que sustentabilidade? Embarque nessa viagem com a gente e aprenda brincando!</h3>
                                        <Button>Bora começar!</Button>
                                    </CardBody>
                                </Card>
                            </a>
                        </div>

                        <div className="col">
                            <a className="link" href="/energias">
                                <Card className="card border h-40">
                                    <img width="40%" height="40%" src="img/energia.jpg" className="card-img-top" alt="..." />
                                    <CardBody>
                                        <h2>Energias renováveis</h2>
                                        <h3>Se eu perguntar se você sabe o nome de 3 energias renováveis você conhece? Entre aqui para conhecer os tipos!</h3>
                                        <Button>Bora começar!</Button>
                                    </CardBody>
                                </Card>
                            </a>
                        </div>
                    </div>
                </Cardes>
            </div>
        </>
    );
}