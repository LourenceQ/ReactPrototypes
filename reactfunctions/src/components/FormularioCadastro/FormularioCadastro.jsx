import React from "react";

function FormularioCadastro() {
  let nome = "";
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome);
      }}
    >
      <label id="nome" label="Nome">
        Nome
      </label>
      <input
        onChange={(event) => {
          nome = event.target.value;
          if(nome.length>3) {
            nome = nome.substrstring(0,3);
          }
        }}
        type="text"
      ></input>

      <label id="sobrenome" label="Sobrenome">
        Sobrenome
      </label>
      <input type="text"></input>

      <label id="cpf" label="CPF">
        CPF
      </label>
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
