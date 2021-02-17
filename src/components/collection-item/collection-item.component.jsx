import "./collection-item.styles.scss";
// Import react and other libraries
import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

// Import other react components

// Create a react component
const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

// Export the react component
export default CollectionItem;
