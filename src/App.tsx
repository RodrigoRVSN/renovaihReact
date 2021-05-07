import Routes from './routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FogaoSolar from './pages/Projetos/FogaoSolar';
import GeradorBike from './pages/Projetos/Bike';
import MiniGeradorEolico from './pages/Projetos/Eolico';
import CarregadorSolar from './pages/Projetos/CarregadorSolar';
import { ProgressBar } from './components/ProgressBar';

function App() {
  return (
    <>

      <BrowserRouter>

      <ProgressBar />
        <Switch>
          <Route path="/fogaoSolar" component={FogaoSolar} />
          <Route path="/geradorBike" component={GeradorBike} />
          <Route path="/geradorEolico" component={MiniGeradorEolico} />
          <Route path="/carregadorSolar" component={CarregadorSolar} />
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
