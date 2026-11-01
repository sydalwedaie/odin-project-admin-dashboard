import "./trending.css";

const list = [
  { handle: "acestar", title: "Duper Smart Radio" },
  { handle: "insider", title: "Super Cute App" },
  { handle: "naomi", title: "Life Changing App" },
  { handle: "viper", title: "No Traffic Maker" },
];

export function Trending() {
  const avatarContext = import.meta.webpackContext("./avatars");
  const html = String.raw;

  const getItemMarkup = ({ handle, title }) => {
    const avatar = avatarContext(`./${handle}.png`);
    return html`
      <div class="trending__item id-label">
        <div class="trending__user-avatar-wrapper id-label__img">
          <img
            class="trending__user-avatar"
            src="${avatar}"
            alt="avatar for ${handle}"
          />
        </div>
        <strong class="trending__user-handle id-label__line-1 text text--strong"
          >@${handle}</strong
        >
        <div class="trending__title id-label__line-2 text text--primary">
          ${title}
        </div>
      </div>
    `;
  };

  const markup = html`
    <div class="trending">
      <h1 class="trending__header heading heading--1">Trending</h1>
      <div class="trending__body card">
        ${list.map((item) => getItemMarkup(item)).join("")}
      </div>
    </div>
  `;

  return markup;
}
