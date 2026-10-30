import "./project-card.css";
import starIcon from "./icons/star.svg";
import watchIcon from "./icons/watch.svg";
import shareIcon from "./icons/share.svg";

export function ProjectCard({ title, description }) {
  const html = String.raw;

  const markup = html`
    <div class="project-card card card--accent">
      <div class="project-card__body">
        <h1 class="project-card__title heading heading--1">${title}</h1>
        <article class="project-card__description text text--primary">
          ${description}
        </article>
      </div>
      <aside class="project-card__actions">
        <button class="project-card__action-btn">
          <img
            class="project-card__action-icon"
            src="${starIcon}"
            alt="star icon"
          /></button
        ><button class="project-card__action-btn">
          <img
            class="project-card__action-icon"
            src="${watchIcon}"
            alt="watch icon"
          /></button
        ><button class="project-card__action-btn">
          <img
            class="project-card__action-icon"
            src="${shareIcon}"
            alt="share icon"
          />
        </button>
      </aside>
    </div>
  `;

  return markup;
}
