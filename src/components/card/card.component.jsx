import "./card.css";

const Card = (props) => {

  const { id, title, description, duration, instructor, image } = props.course;

  const onFavoriteBtnClick = (event) => {
    console.log("Favorite button clicked");
  }

  return (
    <div className="col-3" key={id}>
      <div className="card">
        <div className="card-body">
          <img src={image} className="card-img-top" alt={title}/>
          <h5 className="card-title course-title mt-3">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary course-instructor">{instructor.name}</h6>
          <p className="card-text course-description">{description}</p>
          <p className="card-text course-duration">{duration}</p>
          <div className="row">
            <div className="col">
              <a href="./" className="btn btn-light">Explore</a>
            </div>
            <div className="col">
              <div className="float-end">
                <button className="btn btn-primary favorite-btn" onClick={onFavoriteBtnClick}><i className="bi bi-heart"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;