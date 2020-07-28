// MARK: React
import React from "react";
import { Switch, Route } from "react-router-dom";

// MARK: Layout
import MainLayout from "./layout/MainLayout";

// MARK: Pages
import { Home, Login, Register } from "./pages";

// Router Export
const Router = () => (
  <Switch>
    {/* MARK: MainLayout */}
    <MainLayout path="/" exact component={Home} />
    {/* MARK: Auth */}
    <Route path="/login" exact component={Login} />
    <Route path="/registro" exact component={Register} />
  </Switch>
);

export default Router;
