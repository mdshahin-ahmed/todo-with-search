import React, { useState } from "react";
import "./Home.css";
const datas = ["Milk", "Coffee", "Oranges", "Bread"];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [render, setRenderr] = useState("");
  const handleInput = (e) => {
    setInputValue(e);
  };

  const randomData = [
    "Milk",
    "Coffee",
    "Mango",
    "Banana",
    "Apple",
    "Orange",
    "Water",
    "Bread",
    "Milk",
    "Tea",
    "Tomato",
    "Potato",
  ];

  const addItem = () => {
    const random = Math.random();
    const randomNumber = Math.ceil(random * randomData.length - 1);
    const randomITem = randomData[randomNumber];
    datas.push(randomITem);

    setRenderr(randomITem);
  };

  return (
    <>
      <div className="toddWrap">
        <div className="headingWrap d-flex">
          <input
            onChange={(e) => handleInput(e.target.value)}
            type="text"
            className="inputField"
            placeholder="Search"
          />
          <hr className="hr" />
          <i onClick={() => addItem()} className="fa-solid fa-plus"></i>
        </div>
        <hr className="headingBottom" />
        <div className="listItemsWrap">
          <div className="listItem">
            {datas.map((data, index) => {
              if (data.toLowerCase().startsWith(inputValue.toLowerCase())) {
                if (index === datas.length - 1) {
                  return (
                    <p key={index} className="lastItem">
                      {data}
                    </p>
                  );
                } else {
                  return <p key={index}>{data}</p>;
                }
              }
              return [];
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
