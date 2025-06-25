//import { Component } from "react";
import "./card-list.css";

const CardList = (props) => {
  //console.log('CardList Component Render');
  const { courses } = props;

  return (
    <div className="card-list">
      {courses.map((course) => {
        const { title, description, id, duration, instructor, image } = course;
        return (
          <div className="card-container" key={id}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{instructor.name}</p>
            <p>{duration}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
