import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
  
import PaginaInicial from './components/PaginaInicial';
import Projetos from './components/Projetos';
import SobreMim from './components/SobreMim';
import Contato from './components/Contato';
  
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ PaginaInicial } />
            <Route path='/projetos' component={ Projetos } />
            <Route path='/sobre-mim' component={ SobreMim } />
            <Route path='/contato' component={ Contato } />
        </Switch>
    </BrowserRouter>
);
  
export default Rotas;