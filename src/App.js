import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import CourseData from "./CourseData";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";


function App() {
  const navbar = {
    backgroundColor: 'black',
    padding:'20px',

  };
  const navP = {
    float: 'left',
  }
  const listItem = {
    listStyleType : 'none',
    color: 'white',
    display: 'inline',
    padding:'10px',
    fontSize:'16px',
    cursor:'pointer'
  };
  const inputFild = {
    padding: '6px 12px',
    borderRadius:'5px',
    border: '1px solid #447CFF'
  };
  let totalCost = 0;
  const [totalEnrolled, setTotalEnrolled] = useState([]);

  function enrollHandler(enrolled) {
    let newEnrolled = [...totalEnrolled, enrolled];
    setTotalEnrolled(newEnrolled);
  }
  totalEnrolled.map((data) => {
    totalCost = totalCost + data.price;
  });
  return (
    <>
    <nav style={navbar}> 
    <ul style={navP}>
      <li style={listItem}> Home </li>
      <li style={listItem}> Enrol Course</li>
      <li style={listItem}> About</li>
    </ul>
   <div style={{marginLeft:'492px',display: 'initial'}}>
   <input style={inputFild} placeholder="Search Course" type="text"/>
    <button  className="btn btn-primary">Search</button>
   </div>
  </nav>
    <div className="fullpage">
      <div className="header">
        {/* <Header/> */}
        
      </div>
      <h3 className="title text-center text-dark">Let's Start Learning with Hedemy!</h3>
      <div className="course-container">
        
        <div className="course-details ">
          {CourseData.map((course) => {
            return (
              <Courses
                key={course.id}
                course={course}
                enrollHandler={enrollHandler}
              />
            );
          })}
        </div>

        <div className="cart">
          <Cart totalCost={totalCost} totalEnrolled={totalEnrolled} />
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
