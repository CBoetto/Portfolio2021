import { FC } from "react";
import javaScript from "../assets/javaScript.png";
import typeScript from "../assets/typeScript.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import react from "../assets/react.png";
import reactNative from "../assets/reactNative.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import postgresql from "../assets/postgresql.png";
import express from "../assets/express.png";
import graphql from "../assets/graphql.png";
import cplusplus from "../assets/cplusplus.png";

interface imageRow {
  image: string,
  title: string,
}

const imagesArrayTop = [
  {image: javaScript, title: "JavaScript"}, 
  {image: typeScript, title: "TypeScript"}, 
  {image: html5, title: "HTML5"},
  {image: css3, title: "CSS3"}
];

const imagesArrayMiddle = [
  {image: react, title: "React"}, 
  {image: reactNative, title: "React Native"}, 
  {image: redux, title: "Redux"},
  {image: nodejs, title: "NodeJS"}
];

const imagesArrayBottom = [
  {image: postgresql, title: "PostgreSQL"}, 
  {image: express, title: "Express"}, 
  {image: graphql, title: "GraphQL"},
  {image: cplusplus, title: "C++"}
];

const renderRow = (imagesArray: imageRow[]) => {
  return (
    <div className="skills_row">
      {imagesArray.map( tile => {
        return (
          <div className="skills_tile">
            <img src={tile.image} alt='skill' className="skills_image" />
            <p className='skills_tile_name'>{tile.title}</p>
          </div>
        )
      })}   
    </div>
  )
};

export const Skills: FC = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills_content">
        {renderRow(imagesArrayTop)}
        {renderRow(imagesArrayMiddle)}
        {renderRow(imagesArrayBottom)}
      </div>
    </div>
  )
}