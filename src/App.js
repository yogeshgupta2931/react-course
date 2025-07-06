import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import ErrorAlert from "./components/error-alert/error-alert.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import FooterBar from "./components/footer-bar/footer-bar.component";

const App = () => {
  const [error, setError] = useState({'status':200, 'message':''});
  const [searchField, setSearchField] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    fetch("http://localhost:3300/courses?_embed=instructor")
      .then((response) => response.json())
      .then((courses) => {
        setCourses(courses);
      })
      .catch((error) => {
        console.log(error);
        setError({'status': 400, 'message': error});
      });;
  }, []);

  useEffect(() => {
    //console.log("Set Filter UseEffect triggered");
    const newFilteredCourses = courses.filter((course) => {
      return course.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCourses(newFilteredCourses);
  }, [courses, searchField]);

  const onSearchCourse = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <>
      <div className="container-flex">
        <NavBar></NavBar>
      </div>
      <div className="container">
        <div className="App">
          <div className="row mt-3 mb-3">
            <div className="col">
              <h3 className="app-title mt-3 mb-3">Upskill with these trending courses</h3>
            </div>
            <div className="col">
              <SearchBox
                onChangeHandler={onSearchCourse}
                placeholder="search courses"
                className="search-courses mt-3 mb-3 form-control"
              />              
            </div>
          </div>
          { (error.status !== 200)
            ?<ErrorAlert error={error} />
            :<CardList courses={filteredCourses} />
          }
        </div>
      </div>
      <div className="container-flex">
        <FooterBar></FooterBar>
      </div>
    </>
  );
};

export default App;
