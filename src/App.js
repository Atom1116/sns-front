import React from 'react';
import "./App.css";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import Navbar from './components/Navbar';
import Main from './components/Main';


const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Comic Neue",
  },
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Navbar />
            <div className="container">
            <Main/>
            </div>
        </MuiThemeProvider>
    );
}

export default App;