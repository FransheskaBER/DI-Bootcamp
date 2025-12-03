import React from "react";

const DeleteCategory = React.memo(function DeleteCategory({ onDelete }) {
  return <button onClick={onDelete}>X</button>;
});

export default DeleteCategory;
