import React from "react";
import { Component } from "react";
import "./CardNota.styles.css";

export class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>Título</h3>
        </header>
        <p>Escrever aqui.</p>
      </section>
    );
  }
}
