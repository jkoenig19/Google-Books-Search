import React from "react";

export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button">
      Delete
    </span>
  );
}

export function ViewBtn(props) {
  return (
    <span className="view-btn" {...props} role="button">
      View
    </span>
  );
}

export function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button">
      Save
    </span>
  );
}