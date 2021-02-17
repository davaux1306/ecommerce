import "./App.css";
// Import React and other libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import other react components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

// Create a react component
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

// Export the react component
export default App;
