import React, { useState } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome, cpf, promocoes, novidades);
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
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
      <input
        type="text"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      ></input>

      <label>Promoçoes</label>
      <input
        type="checkbox"
        onChange={(event) => {
          setPromocoes(event.target.checked);
        }}
      ></input>

      <label>Novidades</label>
      <input
        type="checkbox"
        onChange={(event) => {
          setNovidades(event.target.checked);
        }}
      ></input>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;
