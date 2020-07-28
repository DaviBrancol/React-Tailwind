import React from "react";
import { Route, withRouter } from "react-router-dom";

import { Header } from "../components";

function MainLayout({ component: Component, location, history, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <main className="w-full bg-gray-200">
            <div className="w-full flex items-start justify-start">
              <div className="w-full main-container">
                <Header />
                <Component history={history} location={location} {...props} />
              </div>
            </div>
          </main>
        );
      }}
    />
  );
}

export default withRouter(MainLayout);
