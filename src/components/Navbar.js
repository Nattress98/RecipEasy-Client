import React, { Component } from "react";
import { Link } from "react-router-dom";
//#region MUI
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//#endregion
export class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <ToolBar className="nav-container">
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
