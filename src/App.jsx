import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routesConfig from "./config/routes";
// import './css/style.css';
import "./css/App.css";
import "./css/Main.css";
import "./css/btn-rnrs.css";
import reducer from "./redux/reducer";

const { routes } = routesConfig;
library.add(fab, fas, far);
const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div id="Main">
          <Switch>{renderRoutes(routes)}</Switch>
        </div>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}
