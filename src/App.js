import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  //console.log("Render");

  useEffect(() => {
    //console.log("Fetch course UseEffect triggered");
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("http://localhost:3300/courses?_embed=instructor")
      .then((response) => response.json())
      .then((courses) => {
        console.log(courses);
        setCourses(courses);
      });
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
    <div className="App">
      <h1 className="app-title">Trending React Courses on Udemy</h1>
      <SearchBox
        onChangeHandler={onSearchCourse}
        placeholder="search courses"
        className="search-courses"
      />
      <CardList courses={filteredCourses} />
    </div>
  );
};

export default App;
