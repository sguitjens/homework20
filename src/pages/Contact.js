import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const [formObject, setFormObject] = useState({
    fullName: "",
    email: "",
    message: ""
  })

const handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;
  setFormObject({
    ...formObject,
    [name]: value
  })
};

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
    {/* <Content> */}
    <div className="container-fluid">
    <div className="row mt-4">

      <div className="col-md-8 offset-md-1 mid-body">
        <div className="col-md-12 textmargins">
        <ContactForm>
        </ContactForm>
        </div>
      </div>

    </div>
  </div>
    {/* </Content> */}
    <Footer />
  </div>
)}

export default Contact;
