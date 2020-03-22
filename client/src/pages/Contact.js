import React, { useState } from "react";
import { Container, Col, Row } from "../components/Grid";
import API from "../utils/API";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input, TextArea, FormButton } from "../components/Form";

function Contact() {
  const [formObject, clearFormObject] = useState({
    fullName: "",
    email: "",
    message: ""
  })
}

function handleFormSubmit(event) {
  event.preventDefault();
  // clear the form fields
  API.saveInfo({
    fullName: formObject.fullName,
    email: formObject.fullName,
    synopsis: formObject.fullName
  })
  .then(() => {
    
  })
  clearFormObject()
  // eventually we want to send this to a database
}

return (
  <Container fluid>
    <Header>
    </Header>
    <Row size="mt-4">
      <Col size="col-md-8 offset-md">
        <div class="col-md-12 about">Contact</div>
      </Col>
      <Col>
      <form>
          <Input
            // onChange={handleInputChange}
            name="fullName"
            placeholder="John Doe"
          />
          <Input
            // onChange={handleInputChange}
            name="email"
            placeholder="example@gmail.com"
          />
          <TextArea
            // onChange={handleInputChange}
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
)
