import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useReducer } from "reinspect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routesConfig from "./config/routes";
// import './css/style.css';
import "./css/App.css";
import "./css/Main.css";
import "./css/btn-rnrs.css";
import reducers from "./store/reducers";
import StoreContext from "./store/StoreContext";

const { routes } = routesConfig;
library.add(fab, fas, far);

const initState = reducers();

export default function App() {
  const store = useReducer(reducers, initState, null, "S");
  return (
    <BrowserRouter>
      <StoreContext.Provider value={{ state: store[0], dispatch: store[1] }}>
        <Header />
        <div id="Main">
          <Switch>{renderRoutes(routes)}</Switch>
        </div>
        <Footer />
      </StoreContext.Provider>
    </BrowserRouter>
  );
}
