import React from "react";
import sampleDdata from "../sampleData.json";

const Example1 = () => {
  return (
    <>
      <h1>Map the JSON data from the json file</h1>
      {sampleDdata.students.map((result, i) => (
        <div key={i}>
          {result.name} and {result.age}
        </div>
      ))}
    </>
  );
};

export default Example1;
