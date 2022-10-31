import "./App.css";
/* import Example1 from './Components/Example1' */
/* import Example2 from './Components/Example2'; */

/* import Example3 from './Components/Example3'; */
/* import Example4 from "./Components/Example4"; */
/* import Example5 from "./Components/Example5"; */
/* import Example6 from "./Components/Example6"; */
/* import Example7 from "./Components/Example7"; */

import Example8 from "./Components/Example8";

function App() {
  const styleCSS = {
    background: "black",
    //height: "100vh",
    color: "white"
  };
  return (
    <>
      <div className="bg-black text-white" style={styleCSS}>
        {/* <Example1/> */} {/* use to map the json data */}
        {/* <Example2/>  */}
        {/* Search bar with data */}
        {/* <Example3/> */} {/* input Handling and print data */}
        {/* <Example4 /> */} {/* Filter  */}
        {/*    <Example5 />  */} {/* smooth Scroll */}
        {/* <Example6/> */} {/* Loading Effect */}
      </div>
      {/* <Example7 /> */} {/* fetch data in the table */}


      <Example8/>

    </>
  );
}

export default App;
