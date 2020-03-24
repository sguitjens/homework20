import React from "react";
import { Input, TextArea, FormButton } from "../components/Form";

function Content(props) {
  return (
    <div>
      <div className="col-md-12">
        <div className="col-md-12 about">Contact</div>
      </div>
    <form>
      <Input
        onChange={props.handleInputChange}
        name="fullName"
        placeholder="John Doe"
      />
      <Input
        onChange={props.handleInputChange}
        name="email"
        placeholder="example@gmail.com"
      />
      <TextArea
        onChange={props.handleInputChange}
        name="message"
        placeholder="Write your message here."
      />
      <FormButton
        // disabled={!(formObject.fullName && formObject.email)}
        onClick={props.handleFormSubmit}
      />
    </form>
    </div>
  );
}

export default Content;