import React from "react";
import Cards from "../Components/Cards";

const Home = (props) => {
  return (
    <>
    
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <Cards
            title="Array "
            questionStatement="Array Coding"
            pageRedirect="array"
          />
          <Cards
            title="String "
            questionStatement="String Coding"
            pageRedirect="string"
          />
          <Cards
            title="String "
            questionStatement="String Coding"
            pageRedirect="sorting"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
