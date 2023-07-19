import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import PaginaPadrao from './components/PaginaPadrao';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';


export default function AppRouter() {
  return (
    <main>      
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='*' element ={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}