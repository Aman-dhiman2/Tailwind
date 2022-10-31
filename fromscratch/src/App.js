import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import Array from "./Content/Array";
import String from "./Content/String";
import { Route, Routes } from "react-router-dom";
import Sorting from "../src/Content/Sorting";
import Error from "../src/Content/Error";
import PrintArray from "./Content/Array/PrintArray";
import TryCode from "../src/Pages/TryCode";

function App() {
  var rootStyle = {
    backgroundColor: "black",
    color: "white",
    height: "auto",
    padding: "100px",
  };
  return (
    <>
      <div style={rootStyle}>
        <SearchBar />
        {/* <Footer /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="array" element={<Array />} />
          <Route path="string" element={<String />} />
          <Route path="sorting" element={<Sorting />} />
          <Route path="/array/printthearray" element={<PrintArray />} />
        <Route path="/trycodes" element={<TryCode />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
