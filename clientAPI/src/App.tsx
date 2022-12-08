import { Component, Fragment, useEffect, useState } from "react";
import "./App.css";

// useState hook
// function App() {
//   const [products, setProducts] = useState([
//     { name: "product1", price: 100.0 },
//     { name: "product2", price: 200.0 },
//   ]);

//   function addProduct() {
//     setProducts((prevState) => [
//       ...prevState,
//       {
//         name: "product" + (prevState.length + 1),
//         price: prevState.length * 100 + 100,
//       },
//     ]);
//   }

//   return (
//     <div>
//       <h1>APIRHIP</h1>
//       <ul>
//         {products.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price}
//           </li>
//         ))}
//       </ul>
//       <button onClick={addProduct}>Add product</button>
//     </div>
//   );
// }

// useEffect hook
function App() {
  const [employees, setEmployees] = useState([
    { code: "", message: "", values:[], paging:[] },
  ]);

  useEffect(() => {
    fetch('https://localhost:7138/api/ColaboradorComService/obterListaDeColaboradores')
      .then(response => response.json())
      .then(data => setEmployees(data))
  }, [])

  return (
    <div>
      <h1>APIRHIP</h1>
      <ul>
        {employees.map(item => (
          <li>
            {item.message}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
