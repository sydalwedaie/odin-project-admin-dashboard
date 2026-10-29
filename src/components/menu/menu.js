import "./menu.css";
const context = import.meta.webpackContext("./icons");

export function Menu(list) {
  const html = String.raw;

  const getMenuLinkMarkup = (icon, text) => {
    return html`
      <a class="menu__link" href="#">
        <div class="menu__icon-wrapper">
          <img class="menu__icon" src="${icon}" alt="${text} icon" />
        </div>
        <div class="menu__text">${text}</div>
      </a>
    `;
  };

  const menuItemsMarkup = list
    .map((item) => {
      const icon = context(`./${item.toLowerCase()}.svg`);
      return html`<li class="menu__item">${getMenuLinkMarkup(icon, item)}</li>`;
    })
    .join("");

  const markup = html`
    <ul class="menu">
      ${menuItemsMarkup}
    </ul>
  `;

  return markup;
}
