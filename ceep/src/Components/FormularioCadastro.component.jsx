import React, { Component } from "react";

export class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />

        <textarea rows={15} placeholder="Escreva aqui..." />

        <button>Criar Nota</button>
      </form>
    );
  }
}
