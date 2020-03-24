import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageList from "../components/ImageList";

function Portfolio() {
  const [formObject, setFormObject] = useState({
    fullName: "",
    email: "",
    message: ""
  })

// const handleInputChange = event => {
//   // Getting the value and name of the input which triggered the change
//   const { name, value } = event.target;
//   setFormObject({
//     ...formObject,
//     [name]: value
//   })
// };

const handleFormSubmit = event => {
  event.preventDefault();
  // API.saveInfo({
  //   fullName: formObject.fullName,
  //   email: formObject.fullName,
  //   synopsis: formObject.fullName
  // })
  // .then(() => {
    
  // })
  // clear the form fields
  console.log("form object", formObject);
  // setFormObject();
  // eventually we want to send this to a database
}

return (
  <div>
    <Header>
    </Header>
    <ImageList>
    </ImageList>
    <Footer />
  </div>
)}

export default Portfolio;
