// Import React and other libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import other react components
import HomePage from "./pages/homepage/homepage.component";

// Create a react component
const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

// Export the react component
export default App;
