import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import PaginaPadrao from './components/PaginaPadrao';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';

export default function AppRouter() {
  return (
    <main>
      
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>

      </Router>
    </main>
  );
}