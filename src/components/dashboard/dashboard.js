import "./dashboard.css";
import { Sidebar } from "../sidebar/sidebar.js";
import { Header } from "../header/header.js";
import { Main } from "../main/main.js";

export function Dashboard() {
  const html = String.raw;
  const markup = html`
    <div class="dashboard">
      <div class="dashboard__item dashboard__sidebar">${Sidebar()}</div>
      <div class="dashboard__item dashboard__header">${Header()}</div>
      <div class="dashboard__item dashboard__main">${Main()}</div>
    </div>
  `;

  return markup;
}
