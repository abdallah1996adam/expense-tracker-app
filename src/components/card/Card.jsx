import React from "react";

export const Card = ({ item }) => {
  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
        <div className="icons"> <i>{item.category.icon}</i> </div>

    </div>
  );
};

export default Card;
