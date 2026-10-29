import "./sidebar.css";
import { Branding } from "../branding/branding.js";
import { MenuOne, MenuTwo } from "../menu/menu.js";

export function Sidebar() {
  const html = String.raw;
  const markup = html`
    <div class="sidebar">
      <div class="sidebar__item sidebar__branding">${Branding()}</div>
      <div class="sidebar__item sidebar__menu-1">${MenuOne()}</div>
      <div class="sidebar__item sidebar__menu-2">${MenuTwo()}</div>
    </div>
  `;
  return markup;
}
