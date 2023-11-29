import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// class MyClass extends React.Component {
//   state = {
//     product: "Realme 10 pro",
//     price: 20200,
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.product}</h1>
//         <p>{this.state.price}</p>
//         <input id="price" type="number" />
//         <button
//           onClick={() => {
//             let p = document.getElementById("price").value;
//             this.setState({
//               price: p,
//             });
//           }}
//         >
//           Update
//         </button>
//       </>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
