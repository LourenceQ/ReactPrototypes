import React from "react";
import api from "./api";
import { render, sreen } from "@testing-library/react";
import App from "./App";

jest.mock("./api");

describre("Requisições para api", () => {
  it("Exibir lista de transações através da API", async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        valor: 10,
        transacao: "saque",
        data: "10/08/2020",
        id: 1,
      },
      {
        transacao: "deposito",
        valor: "20",
        data: "26/09/2020",
        id: 2,
      },
    ]);

    render(<App />);
    // expect(screen.findByText("saque")).toBeInTheDocument;

    await screen.findByText("saque");
    expect(screen.getByTestId("transacoes").children.length).toBe(2);
  });
});