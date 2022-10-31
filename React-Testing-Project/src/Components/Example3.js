import React, { useEffect, useState } from "react";

const Example3 = () => {
  const [fname, setFname] = useState("");
  const handleChange = (e) => {
    setFname(e.target.value);
  };
  var isCheck = false;
  const buttonData = () => {
    isCheck = true;
  };
  useEffect(() => {}, [fname]);

  return (
    <>
      <div>
        <h1>React Form Handling</h1>
        <form>
          <label>
            First Name:{" "}
            <input type="text" value={fname} onChange={handleChange} />
          </label>
          <h5>First name: {fname}</h5>
          {fname}
        </form>
      </div>
    </>
  );
};

export default Example3;
