import React, { Component } from "react";
import { FormularioCadastro } from "./Components/FormularioCadastro";
import { ListaDeNotas } from "./Components/ListaDeNotas";

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
