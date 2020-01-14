import React from "react";

export function Form(props){
  return (
    <form>
      <div className="form-group">
        <input className="form-control"
        onChange={props.handleInputChange}
        name="search"
        placeholder="Title (required)"
        type="text"
        />
      </div>
      <div className="float-right">
        <button type="submit" onClick={props.handleFormSubmit} style={{ marginBottom: "10px" }} className="btn btn-success">
           Search
        </button>
      </div>
    </form>
  );
}
