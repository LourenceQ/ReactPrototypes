import React, { Component } from "react";

export class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  handleMudancaDeTitulor(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Título"
          onChange={this.handleMudancaDeTitulor.bind(this)}
        />

        <textarea rows={15} placeholder="Escreva aqui..." />

        <button>Criar Nota</button>
      </form>
    );
  }
}
