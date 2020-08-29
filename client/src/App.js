import React from "react";
import { Switch, Route } from "react-router-dom";

import Themer from "./theme.js";
import { routes } from "./routes.js";
import Frame from "./Frame.js";

function App() {
  return (
    <Themer>
      <Frame>
        <Switch>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} exact>
              {r.component}
            </Route>
          ))}
        </Switch>
      </Frame>
    </Themer>
  );
}

export default App;
