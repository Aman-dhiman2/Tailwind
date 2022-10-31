import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      
      <div className="p-4 flex justify-center rounded-xl">
        <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-white bg-black md:text-lg sm:text-sm ">
          <div class="px-6 py-4 ">
            <div class="font-bold text-xl mb-2 sm:text-sm">{props.title}</div>
            <p class="text-black-700 text-base sm:text-sm">
              <b>Problem:- </b> <br />
              {props.questionStatement}
            </p>
            <br />
            <button className="btn sm:btn-sm md:btn-md hover:bg-sky-700 sm:text-sm ">
              <Link to={props.pageRedirect}>Open</Link>
            </button>
          </div>
          <div class="px-6 pt-4 pb-2 sm:text-sm">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              CompanyNames
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Amazone
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #TCS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
