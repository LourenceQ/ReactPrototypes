import React, { Component } from "react";

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaDeTitulor(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaDeTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
    console.log(`uma nova nota foi criada: ` + this.titulo + " " + this.texto);
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaDeTitulor.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva aqui..."
          onChange={this._handleMudancaDeTexto.bind(this)}
        />

        <button>Criar Nota</button>
      </form>
    );
  }
}
