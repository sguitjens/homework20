import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  // eslint-disable-next-line
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

// eslint-disable-next-line
const handleFormSubmit = event => {
  event.preventDefault();
  console.log("form object", formObject);
}

return (
  <div>
    <Header>
    </Header>
    {/* <Content> */}
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-8 offset-md-1">
          <div className="col-md-12 textmargins">
          <ContactForm>
          </ContactForm>
          </div>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
)}

export default Contact;
