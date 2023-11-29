import "./App.css";
import React, { useState } from "react";
const arr = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];

export const CardContainer = (props) => {
  const { resData } = props;
  const { image, title, price, category, rating } = resData;
  return (
    <div className="sub-container">
      <div>
        <img src={image} alt="product-img" className="product-img" />
      </div>
      <div className="container-text">
        <p>{title}</p>
        <p>{price}</p>
        <p>{category}</p>

        <p>{rating.rate}</p>
      </div>
    </div>
  );
};

export const TopComponent = () => {
  const [childComponent, setChildComponent] = useState([]);
  const addChildComponent = () => {
    const newChild = {
      id: Date.now(),
      content: `Child Component${childComponent.length + 1}`,
    };
    setChildComponent([...childComponent, newChild]);
  };
  return (
    <div>
      <button className="btn" onClick={addChildComponent}>
        Add Component
      </button>
      {childComponent.map((child) => (
        <ChildComponent key={child.id} content={child.content} />
      ))}
    </div>
  );
};
export const ChildComponent = ({ content }) => {
  return <div className="child">{content}</div>;
};

const App = () => {
  const [isShown, setIsShown] = useState(true);
  const handle = () => {
    setIsShown(!isShown);
  };
  // task-1-ass-3
  const [toggleButn, setToggleBtn] = useState(false);
  const handleChange = () => {
    setToggleBtn(!toggleButn);
  };
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  const [fNum, setFNum] = useState();
  const [lNum, setLNum] = useState();
  const calSum = () => {
    const res = parseInt(fNum) + parseInt(lNum);
    setNum(res);
  };
  return (
    <div>
      <h3>Display array of records on the screen</h3>
      <div className="total-container">
        <div className="card-container">
          {arr.map((res) => (
            <CardContainer key={arr.id} resData={res} />
          ))}
        </div>
      </div>
      {/* TASK-1:ASS2 */}
      <div className="task-1-2">
        <h3>Show and Hide Eliment on screen</h3>
        <button onClick={handle}>{isShown ? "Hide" : "Show"}</button>
      </div>

      {/* TASK-1-ASS3 */}
      <h3>Enable And Disable Button</h3>
      <div className="t-3-container">
        <div onClick={handleChange} className="toggle">
          {toggleButn ? (
            <div className="toggle_left">
              <span className="on">On</span>
            </div>
          ) : (
            <div className="toggle_right">
              <span>Off</span>
            </div>
          )}
        </div>
      </div>

      {/* TASK_1-ASS4 */}
      <h3>2Way data binding using textbox</h3>
      <div className="task4">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="firstname"
          id="firstname"
        />
        <h2>FirstName:{<p className="name">{name}</p>}</h2>
      </div>
      {/* TASK-1-ASS5 */}
      <h3>Dynamically add child components</h3>
      <div className="task1-5">
        <TopComponent />
      </div>

      {/* TASK1-ASS6 */}
      <h3>Do sum of two numbers</h3>
      <div className="task1-5">
        <lable>
          Enter First Number:
          <input
            type="number"
            value={fNum}
            onChange={(e) => setFNum(e.target.value)}
          />
        </lable>
        <br />
        <br />
        <lable>
          Enter Second Number:
          <input
            type="number"
            value={lNum}
            onChange={(e) => setLNum(e.target.value)}
          />
        </lable>
        <br />
        <br />
        <button className="btn1" onClick={calSum}>
          Add
        </button>
        <br />
        <p>Sum:{num}</p>
      </div>
    </div>
  );
};

export default App;
