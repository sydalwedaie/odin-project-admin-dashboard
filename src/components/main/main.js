import "./main.css";
import { Announcements } from "../announcements/announcements.js";
import { Projects } from "../projects/projects.js";
import { Trending } from "../trending/trending.js";

export function Main() {
  const html = String.raw;
  const markup = html`
    <main class="main">
      <div class="main__body">
        <div class="main__item main__projects">${Projects()}</div>
      </div>
      <aside class="main__aside">
        <div class="main__item main__announcements">${Announcements()}</div>
        <div class="main__item main__trending">${Trending()}</div>
      </aside>
    </main>
  `;
  return markup;
}
