import React from "react";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import TableData from "../components/TableData";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHeader />
      <div className="">
        <h2 className="text-center text-5xl " id="LiveData">
          Live Data
        </h2>
        <div className="p-10">
          <TableData />
        </div>
      </div>
    </>
  );
};

export default Home;
