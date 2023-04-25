import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* Agregar otras rutas aquí si es necesario */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
