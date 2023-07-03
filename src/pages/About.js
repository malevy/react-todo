import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header>
        <Link to="/tasks">Tasks</Link>
      </header>

      <h1>About</h1>
      <p>a silly about page to play with React Router</p>
    </>
  );
}

export default About;
