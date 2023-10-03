import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import { ParallaxProvider } from "react-scroll-parallax";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <ParallaxProvider>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </ParallaxProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
