import React from "react";
import { Router } from "@reach/router";
import { AppContainer, SideMenu, Header, Content } from "./Layout/index";
import Welcome from "./Welcome";
import Help from "./Help";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <SideMenu />
        <Header />
        <Content>
          <Router>
            <Welcome path="/" />
            <Help path="/help" />
          </Router>
        </Content>
      </AppContainer>
    );
  }
}

export default App;
