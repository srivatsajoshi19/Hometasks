import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
