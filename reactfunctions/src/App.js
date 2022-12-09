import { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Formulário</h1>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
      </Fragment>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if(cpf.length != 11) {
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else {
    return {valido:true, texto:"CPF deve ter 11 digitos."}
  }
}

export default App;
