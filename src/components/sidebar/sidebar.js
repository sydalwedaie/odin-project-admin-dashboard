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
      <div class="sidebar__item sidebar__theme-control">
        <div class="theme-control">
          <button class="theme-control__toggle-mode button button--clear">
            <span class="theme-control__toggle-text text text--inverted"
              >Toggle Dark Mode</span
            >
          </button>
          <div class="theme-control__toggle-color">
            <button
              class="theme-control__toggle-blue button button--round"
              data-color="blue"
            ></button>
            <button
              class="theme-control__toggle-green button button--round"
              data-color="green"
            ></button>
            <button
              class="theme-control__toggle-purple button button--round"
              data-color="purple"
            ></button>
          </div>
        </div>
      </div>
    </div>
  `;
  return markup;
}
