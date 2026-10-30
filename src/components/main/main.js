import { Announcements } from "../announcements/announcements.js";
import { Trending } from "../trending/trending.js";
import "./main.css";

export function Main() {
  const html = String.raw;
  const markup = html`
    <main class="main">
      <div class="main__item main__projects">Your Projects</div>
      <div class="main__item main__announcements">${Announcements()}</div>
      <div class="main__item main__trending">${Trending()}</div>
    </main>
  `;
  return markup;
}
