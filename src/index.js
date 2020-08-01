import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria'
import CadastroVideo from './pages/cadastro/Video'
import Pagina404 from './pages/Page404'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Home } exact />
      <Route path="/cadastro/categoria" component={ CadastroCategoria } exact />
      <Route path="/cadastro/video" component={ CadastroVideo } exact />
      <Route component={ Pagina404 } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
