import React from "react";
import data from "../data.json";

export default function About() {
  return (
    <div className="aboutWrapper">
      <div className="aboutDiv">
        <h1>{data.About[0].name}</h1>
        <p>{data.About[0].estonia}</p>
        <br></br>
        <p>{data.About[0].cn}</p>
        <p>{data.About[0].developer}</p>
        <br></br>
        <p>{data.About[0].hairdressing}</p>
        <p></p>
        <br></br>
        <p>{data.About[0].gym}</p>
        <br></br>
        <p>{data.About[0].hiking}</p>
        <br></br>
      </div>
    </div>
  );
}
