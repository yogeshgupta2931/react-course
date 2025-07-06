//import { Component } from "react";
import "./card-list.css";
import Card from "./card.component";

const CardList = (props) => {

  const { courses } = props;

  return (
    <div className="row">
      {courses.map((course) => {
        return <Card course={course} key={course.id} />
      })}
    </div>
  );
};

export default CardList;
