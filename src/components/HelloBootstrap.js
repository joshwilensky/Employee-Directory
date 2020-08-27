import React from "react";

function HelloBootstrap() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1> Employee Directory </h1> <p> I'm a Little Teapot!</p>{" "}
        <p>
          <button className="btn btn-primary btn-lg"> Learn more </button>{" "}
        </p>{" "}
      </div>{" "}
      <div className="card mb-4">
        <div className="card-header">
          <h3> Card Title </h3>{" "}
        </div>{" "}
        <div className="card-body">
          <p className="card-text"> Card Content </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="card mb-4">
        <div className="card-header">
          <h3> Card Title </h3>{" "}
        </div>{" "}
        <div className="card-body">
          <p className="card-text"> Card Content </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default HelloBootstrap;
