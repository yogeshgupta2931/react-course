//import { Component } from "react";
import "./card-list.css";

const CardList = (props) => {
  //console.log('CardList Component Render');
  const { courses } = props;

  return (
    <div className="row">
      {courses.map((course) => {
        const { title, description, id, duration, instructor, image } = course;
        return (
          <div className="col-3">
            <div className="card" key={id}>
              <div className="card-body">
                <img src={image} className="card-img-top" alt={title}/>
                <h5 className="card-title course-title mt-3">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary course-instructor">{instructor.name}</h6>
                <p className="card-text course-description">{description}</p>
                <p className="card-text course-duration">{duration}</p>
                <div class="row">
                  <div class="col">
                    <a href="./" className="btn btn-light">Explore</a>
                  </div>
                  <div class="col">
                    <div className="float-end">
                      <button className="btn btn-primary"><i class="bi bi-heart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
