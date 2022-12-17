import React from "react";
import Botao from "../Botao";
import "./style.scss";

class Formulario extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label> Adiciona um novo estudo </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que estudar"
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="tempo"> Tempo </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tarefa"
            min="00:00:00"
            max="01:00:00"
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
