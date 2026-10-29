import "./sidebar.css";
import { Branding } from "../branding/branding.js";
import { Menu } from "../menu/menu.js";
import menu from "../menu/menu.json";

export function Sidebar() {
  const html = String.raw;
  const markup = html`
    <div class="sidebar">
      <div class="sidebar__item sidebar__branding">${Branding()}</div>
      <div class="sidebar__item sidebar__menu-1">${Menu(menu["menu-1"])}</div>
      <div class="sidebar__item sidebar__menu-2">${Menu(menu["menu-2"])}</div>
    </div>
  `;
  return markup;
}
