import React, { Component } from "react";
import { FormularioCadastro } from "./Components/FormularioCadastro";
import { ListaDeNotas } from "./Components/ListaDeNotas";

class App extends Component {
  criarNota(titulo, texto) {
    console.log(`uma nova nota foi criada: ` + titulo + " " + texto);
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
