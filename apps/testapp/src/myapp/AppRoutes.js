import { Flex } from "jag-ui-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SideNav from "./components/SideNav";
import ComponentsPage from "./pages/ComponentsPage";
import MyAppNav from "./MyAppNav";

export default function AppRoutes() {
  return (
    <Router>
      <Flex width="full" height="100vh" bg="bg.main">
        <MyAppNav />
        <Flex width="full" height="full">
          <Switch>
            <Route path="/home">Home Body</Route>
            <Route path="/themes">Themes Body</Route>
            <Route path="/api">API Body</Route>
            <Route path="/help">API Body</Route>
            <Route path="/settings">Settings</Route>
            <Route path="/components">
              <ComponentsPage />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Flex>
      </Flex>
    </Router>
  );
}
