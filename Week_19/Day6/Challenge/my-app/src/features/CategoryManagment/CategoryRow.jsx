import React from "react";
import DeleteCategory from "./DeleteCategory.jsx";
import EditCategory from "./EditCategory.jsx";

const CategoryRow = React.memo(function CategoryRow({ cat, onDelete, onEdit, editingCatId }) {
  const isEditing = editingCatId === cat.id;

  return (
    <div style={{ display: "flex", margin: "30px", alignItems: "center", gap: "10px" }}>
      {isEditing ? (
        <EditCategory catId={cat.id} currentName={cat.name} currentColor={cat.color} closeEditor={() => onEdit(null)} />
      ) : (
        <>
          <span style={{
            display: "inline-block",
            width: "16px",
            height: "16px",
            backgroundColor: cat.color,
            borderRadius: "50%",
            }}>
          </span>
          <span>{cat.name}</span>
          <DeleteCategory onDelete={() => onDelete(cat.id)} />
          <button onClick={() => onEdit(cat.id)}>Edit Category</button>
        </>
      )}
    </div>
  );
});

export default CategoryRow;
