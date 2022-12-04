import React, { Component } from "react";
import { FormularioCadastro } from "./Components/FormularioCadastro.component";
import { ListaDeNotas } from "./Components/ListaDeNotas.component";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
