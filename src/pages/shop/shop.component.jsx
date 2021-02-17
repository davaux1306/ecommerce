// Import React and other libraries
import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// Import other react components
import SHOP_DATA from "./shop.data";

// Create the react component
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

// Export the react component
export default ShopPage;
