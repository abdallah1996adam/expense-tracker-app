import React from "react";
//components
import { TopBar } from "../../components";
//css
import './home.css'

export const Home = () => {
  return (
    <section className="home">
      <TopBar />
      <div>Topfold</div>
      <div>expenseList</div>
    </section>
  );
};

export default Home;
