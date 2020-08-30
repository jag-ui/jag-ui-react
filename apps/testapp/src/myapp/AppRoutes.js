import { Flex } from "jag-ui-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SideNav from "./components/SideNav";
import ComponentsPage from "./pages/ComponentsPage";

export default function AppRoutes() {
  return (
    <Router>
      <Flex width="full" height="100vh" bg="bg3">
        <SideNav />
        <Flex width="full" height="full">
          <Switch>
            <Route path="/learn">Learn Body</Route>
            <Route path="/themes">Themes Body</Route>
            <Route path="/components">
              <ComponentsPage />
            </Route>
            <Redirect to="/components" />
          </Switch>
        </Flex>
      </Flex>
    </Router>
  );
}
