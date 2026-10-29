import "./sidebar.css";
import { Branding } from "../branding/branding.js";

export function Sidebar() {
  const html = String.raw;
  const markup = html`
    <div class="sidebar">
      <div class="sidebar__item sidebar__branding">${Branding()}</div>
      <div class="sidebar__item sidebar__menu1">Menu 1</div>
      <div class="sidebar__item sidebar__menu2">Menu 2</div>
    </div>
  `;
  return markup;
}
