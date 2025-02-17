import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Provider } from "react-redux";
import store from "./store/store";
import Texture from "./Texture";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
