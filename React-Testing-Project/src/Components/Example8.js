import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";

function Users() {
  // 👇️ get ID from url
  const params = useParams();

  //console.log(params); // 👉️ {userId: '4200'}

  return <h2>userId is 👉️ {params.userId}</h2>;
}

export default function Example8() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* 👇️ link to dynamic path */}
              <Link to="/users/4200">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          {/* 👇️ handle dynamic path */}
          <Route path="/users/:userId" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
