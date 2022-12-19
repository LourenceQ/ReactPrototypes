import React from "react";
import Item from "./item";
import style from "./Lista.module.scss";

function Lista() {
  const tarefa = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "C#",
      tempo: "02:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefa.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
