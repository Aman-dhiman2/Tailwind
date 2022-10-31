import React, { useState } from "react";

const Example4 = () => {
    const [query, setquery] = useState("");
    const [state, setstate] = useState({
      query: "",
      list: [],
    });
    const handleChange = (e) => {
      const results = posts.filter((post) => {
        if (e.target.value === "") return posts;
        return post.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setstate({
        query: e.target.value,
        list: results,
      });
    };
    const posts = [
      {
        url: "",
        tags: ["react", "blog"],
        title: "How to create a react search bar",
      },
      {
        url: "",
        tags: ["node", "express"],
        title: "How to mock api data in Node",
      },
      // more data here
    ];
  return (
    <>
      <div className="text-blue bg-black-200 ">
        <form className="text-blue bg-black-200">
          <input onChange={handleChange} value={state.query} type="search" className="text-black"/>
        </form>
        <ul>
          {state.query === ""
            ? ""
            : state.list.map((post) => {
                return <li key={post.title}>{post.title}</li>;
              })}
        </ul>
      </div>
    </>
  );
};

export default Example4;
