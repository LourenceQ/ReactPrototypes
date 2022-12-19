import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<IProps> {
  render() {
    return <button className={style.Botao}>{this.props.children}</button>;
  }
}

export default Botao;

interface IProps {
  children: React.ReactNode;
}
