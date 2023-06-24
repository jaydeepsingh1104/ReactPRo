import React from 'react';
import ReactDOM from 'react-dom/client';

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
  };
function Mainheader() //Name start with Capital letter Pascal CAse
{  return <h1 className="text-primary">main course</h1>
}
function Footer()
{

  const whatWeWillLearn = "React JS";
  return <p>  In this course, we will learn {whatWeWillLearn}  by building TaskoPedia!  </p>

 // return <p>Footer</p>
}
function Students() {
  const fullName = "Kris Walley";
  const programmingExp = 2;
  return (
  <div className="container-4">
  <div className="row">Studes olled</div>
  <div className="row border">
  <div className="col-2">
  <img  src={`https://ui-avatars.com/api/?name=${fullName}`}  className="w-100"></img>
  </div>
  <div className="col-10">
  {fullName}
  <br />
  Coding Experience (programmingExp} vears
  </div>
  </div>
  </div>)
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //Mainheader(); can also use this
  <div><Mainheader/>
  <Students/>
  <Students/>
  <Students/>
  <Footer/></div> 
);

