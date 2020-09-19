import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Themer from "./theme.js";
import { routes, Frame } from "./nav";
import { cache } from "./common";

function App() {
  useEffect(() => {
    // ComponentDidMount
    cache.reset();
    window.addEventListener("beforeunload", () => cache.reset());

    // ComponentWillUnmount
    return window.removeEventListener("beforeunload", () => cache.reset());
  }, []);

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
