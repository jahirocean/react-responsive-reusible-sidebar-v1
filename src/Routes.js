import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Destination from "./components/MainView/Destination/Destination";
import Blog from "./components/MainView/Blog/Blog";
import Contacts from "./components/MainView/Contacts/Contacts";
import Services from "./components/MainView/Services/Services";
import Country from "./components/MainView/Destination/Country/Country";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/destination" component={Destination} />
      <Route exact path="/destination/:country" component={Country} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contacts" component={Contacts} />
    </Switch>
  );
}

export default Routes;
