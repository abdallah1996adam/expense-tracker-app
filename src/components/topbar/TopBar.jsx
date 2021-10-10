import React, { useState } from "react";
//icons
import { BsSearch } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import {IoIosArrowBack} from 'react-icons/io'
import {TiDeleteOutline} from "react-icons/ti"
//css
import "./bar.css";

const TopBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="top">
      {window.location.pathname === "/" ? (
        <div className="container">
          <div className="search-bar">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="search for expenses"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="add-btn">
            <IoIosAddCircleOutline />
            <label className="add">Add</label>
          </div>
        </div>
      ) : (
        <div className="add-expense">
          <div className="add-btn2">
            <IoIosArrowBack className="back-arrow"/>
            <label >back</label>
          </div>
          <div className="add-btn2">
            <TiDeleteOutline className="back-arrow"/>
            <label >cansel</label>
          </div>
        </div>
      )}
    </section>
  );
};

export default TopBar;