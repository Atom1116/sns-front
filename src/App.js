import React from "react";
// import "./App.css";

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider} from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import Navbar from "./components/Navbar";
import ApiContextProvider from "./context/ApiContext";
import Main from "./new_components/Main";
// import Main from "./components/Main";

// アプリテーマの定義
const theme = createTheme({
  palette: {
    primary: {
      main: "#93c47d"
    },
    secondary: {
      main: "#292F38",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

function App() {
  return (
    <ApiContextProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main/>
      </ThemeProvider>
    </ApiContextProvider>
  );
}

export default App;