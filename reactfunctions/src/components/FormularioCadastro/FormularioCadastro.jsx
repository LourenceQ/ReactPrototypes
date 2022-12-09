import React, { useState } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          if (tempNome.length >= 3) {
            tempNome = tempNome.substring(0, 3);
          }
          setNome(tempNome);
        }}
      ></input>

      <label>Sobrenome</label>
      <input
        type="text"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      ></input>

      <label>CPF</label>
      <input type="text"></input>

      <label>Promoçoes</label>
      <input type="checkbox"></input>

      <label>Novidades</label>
      <input type="checkbox"></input>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;
