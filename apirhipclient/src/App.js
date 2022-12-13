import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [employess, setEmployees] = useState([
    { nomeColaborador: "", nomeLider: "" },
  ]);

  const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "100px",
    fontFamily: "Arial"
  };

  useEffect(() => {
    fetch("https://localhost:7176/api/HO/obterColaboradoresMapeadosPulses")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    
    <table style={mystyle}>
      
      <td>
        {employess.map((item, index) => (
          <tr key={index}>
            {item.nomeColaborador} - {item.nomeLider}
          </tr>
        ))}
      </td>
    </table>
  );
}

export default App;
