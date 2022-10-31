import React from "react";
import Imagebg from "../image/noBg.png";

const Header = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font" id="home">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-6xl sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hey,{" "}
              <span className="text-green-500 text-5xl font-medium ">
                Rayne{" "}
              </span>
              Coder
              <br class="hidden lg:inline-block" />
              <div className="mt-4">
                {" "}
                It's me, Aman{" "}
                <span className="text-green-500 text-5xl">Dhiman</span>
              </div>
            </h1>
            <p class="mb-8 leading-relaxed text-2xl">
              A Full Stack Web Developer having experience of building Web
              applications with JavaScript / Reactjs / Nodejs and some other
              cool libraries and frameworks.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg bg-green-500 shadow-lg shadow-green-500/50">
                About Me
              </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="bg-green-500 rounded-t-2xl h-6 "></div>
            <div className="bg-white shadow-lg shadow-green-500/90 rounded-b-2xl h-6"></div>
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Imagebg}
            />
            <div className="bg-white rounded-t-2xl h-6"></div>
            <div className="bg-green-500 shadow-lg shadow-green-400/100 rounded-b-2xl h-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
