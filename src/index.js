import "./index.css";
import "./template.html";
import { Dashboard } from "./components/dashboard/dashboard.js";
import { ThemeControlLogic } from "./components/theme-control/theme-control-logic.js";

const bodyEl = document.querySelector("body");
bodyEl.innerHTML = Dashboard();

ThemeControlLogic();
