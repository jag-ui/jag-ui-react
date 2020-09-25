import { Box, Flex } from "jag-ui-react";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import MyAppNav from "./MyAppNav";
import ComponentsPage from "./pages/ComponentsPage";
import HomePage from "./pages/HomePage";

export default function AppRoutes() {
  return (
    <Router>
      <Flex width="100%" height="100%" overflowY="hidden" bg="bg.main">
        <MyAppNav />
        <Box width="100%" height="100%" overflowY="hidden">
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/themes">Themes Body</Route>
            <Route path="/api">API Body</Route>
            <Route path="/help">Help</Route>
            <Route path="/settings">Settings</Route>
            <Route path="/components">
              <ComponentsPage />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Box>
      </Flex>
    </Router>
  );
}
