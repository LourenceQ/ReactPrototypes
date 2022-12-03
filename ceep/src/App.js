import React from "react";
import { ListaDeNotas } from "./Components/ListaDeNotas";
function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />

        <textarea placeholder="Escreva aqui..." />

        <button>Criar Nota</button>
      </form>

      <ListaDeNotas />
      <ListaDeNotas />
      <ListaDeNotas />
    </section>
  );
}

export default App;
