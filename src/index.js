import "./index.css";
import "./template.html";
import { Dashboard } from "./components/dashboard/dashboard.js";

const bodyEl = document.querySelector("body");
bodyEl.innerHTML = Dashboard();
