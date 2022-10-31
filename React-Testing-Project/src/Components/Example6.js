import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";


const Example6 = () => {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 7000);
  }, []);
    
    const styleCSS = {
        display: "Flex",
        justifyContent :"center"
    }
    

  return (
    <>
          {load ? (
              
              <HashLoader color={"red"} loading={load} size={100} style={styleCSS} />
      ) : (
        <center>
          <h1> Try to make a loading </h1>
        </center>
      )}
    </>
  );
};

export default Example6;
