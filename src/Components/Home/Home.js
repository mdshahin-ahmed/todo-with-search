import React, { useState } from "react";
import "./Home.css";
const datas = ["Potato", "Mango", "Tomato", "Apple"];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleInput = (e) => {
    setInputValue(e);
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
          <i className="fa-solid fa-plus"></i>
        </div>
        <hr className="headingBottom" />
        <div className="listItemsWrap">
          <div className="listItem">
            {datas.map((data) => {
              return <p key={data}>{data}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
