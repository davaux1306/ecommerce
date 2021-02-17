import "./collection-preview.styles.scss";
// Import React and other libraries
import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

// Import other react components

// create a react component
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

// Export the react component
export default CollectionPreview;
