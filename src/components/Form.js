import React from "react";



export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="12" {...props} />
    </div>
  );
}

export function FormButton(props) {
  return (
    <button type="submit"  {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
      Submit
    </button>
  );
}
