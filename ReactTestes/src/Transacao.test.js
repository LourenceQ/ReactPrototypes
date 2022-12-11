import React from "react";
import {render} from "@testing-library/react";
import Transacao from "./transacoes/Transacao";

describe("Componenete de transação do extrato", () => {
  it("O snapshot do componenet deve permanecer sempre o mesmo", () => {
    const {container} = render(
      <Transacao data="08/09/2022" tipo="saque" valor="20.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
