import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<
  any,
  any,
  {
    type?: "button" | "submit" | "reset" | undefined, onCLick?: () => void;
  }
> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.Botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
