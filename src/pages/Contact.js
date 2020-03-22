import React, { useState } from "react";
import { Container, Col, Row } from "../components/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input, TextArea, FormButton } from "../components/Form";

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
  <Container fluid>
    <Header>
    </Header>
    <Row size="mt-4">
      <Col size="md-8 offset-md">
        <div class="col-md-12 about">Contact</div>
      </Col>
      <Col size="md-4">
      <form>
          <Input
            onChange={handleInputChange}
            name="fullName"
            placeholder="John Doe"
          />
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="example@gmail.com"
          />
          <TextArea
            onChange={handleInputChange}
            name="message"
            placeholder="Write your message here."
          />
          <FormButton
            // disabled={!(formObject.fullName && formObject.email)}
            onClick={handleFormSubmit}
          >
            Submit Book
          </FormButton>
        </form>
      </Col>
    </Row>
    <Footer />
  </Container>
)}

export default Contact;
