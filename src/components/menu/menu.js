import "./menu.css";

export function MenuOne() {
  const list = [
    "Home",
    "Profile",
    "Messages",
    "History",
    "Tasks",
    "Communities",
  ];
  return Menu(list);
}

export function MenuTwo() {
  const list = ["Settings", "Support", "Privacy"];
  return Menu(list);
}

function Menu(list) {
  const iconsContext = import.meta.webpackContext("./icons");
  const html = String.raw;

  const getItemMarkup = (itemText) => {
    const icon = iconsContext(`./${itemText.toLowerCase()}.svg`);
    return html`
      <li class="menu__item">
        <a class="menu__link" href="#">
          <div class="menu__icon-wrapper">
            <img class="menu__icon" src="${icon}" alt="${itemText} icon" />
          </div>
          <div class="menu__text">${itemText}</div>
        </a>
      </li>
    `;
  };

  const markup = html`
    <ul class="menu">
      ${list.map(getItemMarkup).join("")}
    </ul>
  `;

  return markup;
}
