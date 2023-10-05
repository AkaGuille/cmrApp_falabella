import React from "react";

const Category = ({ icon, label }) => {
  return (
    <div className="category">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  );
};

export default Category;
