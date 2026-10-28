import "./dashboard.css";
import { Sidebar } from "../sidebar/sidebar.js";

export function Dashboard() {
  const html = String.raw;
  const markup = html`
    <div class="dashboard">
      <div class="dashboard__item dashboard__sidebar">${Sidebar()}</div>
      <div class="dashboard__item dashboard__header">header</div>
      <div class="dashboard__item dashboard__main">main</div>
    </div>
  `;

  return markup;
}
