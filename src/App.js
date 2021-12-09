import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Addvideo from "./components/addVideo";
import EventHandling from "./components/eventhandling";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import listVideos from "./components/listvideos";
import Login from "./components/login";
import ProductList from "./components/productlist";
import SignUp from "./components/signup";
import { ProductProvider } from "./productContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#390053",
        dark: "red",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#1f1f1f",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ProductProvider>
        <BrowserRouter>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/event" component={EventHandling} />
          <Route path="/signup" component={SignUp} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/addvideo" component={Addvideo} />
          <Route path="/listvideos" component={listVideos} />
        </BrowserRouter>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
