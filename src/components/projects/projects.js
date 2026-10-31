import "./projects.css";
import { ProjectCard } from "../project-card/project-card.js";

const projects = [
  {
    title: "Money Maker",
    description:
      "Iure quia tenetur id sint! Perferendis incidunt praesentium voluptate magni saepe eum.",
  },
  {
    title: "Impossible App",
    description:
      "Ipsam animi voluptas aspernatur, vero hic veniam odit, temporibus necessitatibus, obcaecati accusantium excepturi dolor nisi id? Nisi reprehenderit sit quidem.",
  },
  {
    title: "Super Cool Project",
    description:
      "Ariatur rerum, necessitatibus ipsum minus vitae id voluptatem quia temporibus facere nostrum asperiores totam, fugit cupiditate provident.",
  },
  {
    title: "Less Cool Project",
    description:
      "Dolore porro laborum numquam at repellendus perferendis sequi voluptatum labore, autem aperiam quod esse, dolores quo fugiat rem, pariatur corporis?",
  },
  {
    title: "Easy Peazy App",
    description:
      "Fugiat voluptates dicta, officia quisquam optio ex libero! Dicta, doloribus esse. Eum sapiente nihil saepe praesentium voluptatibus ratione iusto molestias.",
  },
  {
    title: "Smart Garden Hose",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati illo harum id voluptates aut ut quaerat libero quisquam!",
  },
  {
    title: "Ad Blocker",
    description:
      "Voluptatibus vitae quasi minus dignissimos enim perspiciatis, velit quo placeat incidunt esse possimus necessitatibus dolore ipsam nobis! Eaque, ipsa esse?",
  },
];

export function Projects() {
  const html = String.raw;

  const markup = html`
    <div class="projects">
      <h1 class="projects__header heading heading--1">Your Projects</h1>
      <div class="projects__body">${projects.map(ProjectCard).join("")}</div>
    </div>
  `;

  return markup;
}
