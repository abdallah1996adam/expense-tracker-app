import React from "react";
//components
import { TopBar, ExpenseList } from "../../components";

//css
import "./home.css";

export const Home = () => {
  return (
    <section className="home">
      <TopBar />
      <ExpenseList />
    </section>
  );
};

export default Home;
