import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import React, { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import IColaboradoresPulses from "./interfaces/IColaboradoresPulses";

function App() {
  const [colaboradores, setColaboradores] = useState<IColaboradoresPulses[]>(
    []
  );

  useEffect(() => {
    axios
      .get("https://localhost:7176/api/HO/obterColaboradoresMapeadosPulses")
      .then((response) => {
        setColaboradores(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(colaboradores);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>Colaborador</h1>
            </TableCell>
            <TableCell>
              <h1>Líder</h1>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {colaboradores.map((c) => (
            <TableRow key={c.nomeColaborador}>
              <TableCell style={{ fontSize: "20px" , backgroundColor: "green"}}>{c.nomeColaborador}</TableCell>
              <TableCell style={{ fontSize: "20px" }}>{c.nomeLider}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
