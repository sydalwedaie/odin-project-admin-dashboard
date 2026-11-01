import "./header.css";
import searchIcon from "./search.svg";
import bellIcon from "./bell.svg";
import acestarAvatar from "./acestar.png";

export function Header() {
  const html = String.raw;
  const markup = html`
    <div class="header">
      <div class="header__item header__search">${createSearch()}</div>
      <div class="header__item header__user-profile">
        ${createUserProfile("Acestar", acestarAvatar)}
      </div>
      <div class="header__item header__greeting">
        ${createGreeting("Acestar", "@Acestar", acestarAvatar)}
      </div>
      <div class="header__item header__actions">${createActions()}</div>
    </div>
  `;
  return markup;
}

function createSearch() {
  const html = String.raw;
  return html`
    <div class="search">
      <label for="search-input" class="search__label">
        <img src="${searchIcon}" alt="search icon" class="search__icon" />
      </label>
      <input
        type="text"
        class="search__input"
        id="search-input"
        name="search-input"
      />
    </div>
  `;
}

function createGreeting(name, handle, avatar) {
  const html = String.raw;
  return html`
    <div class="greeting id-label">
      <div class="greeting__avatar-wrapper id-label__img">
        <img src="${avatar}" alt="user avatar" class="greeting__avatar" />
      </div>
      <div class="greeting__msg id-label__line-1 text text--strong">
        Hi there,
      </div>
      <div class="greeting__username id-label__line-2 text text--pop">
        ${name} (${handle})
      </div>
    </div>
  `;
}

function createUserProfile(name, avatar) {
  const html = String.raw;
  return html`
    <div class="user-profile">
      <div class="user-profile__bell">
        <img
          src="${bellIcon}"
          alt="bell icon"
          class="user-profile__bell-icon"
        />
      </div>
      <div class="user-profile__avatar-wrapper">
        <img src="${avatar}" alt="user avatar" class="user-profile__avatar" />
      </div>
      <div class="user-profile__name text text--strong">${name}</div>
    </div>
  `;
}

function createActions() {
  const html = String.raw;
  const items = ["new", "upload", "share"];

  const getButtonMarkup = (item) => {
    return html`
      <button class="actions__item button">
        <span class="button__text text text--inverted">${item}</span>
      </button>
    `;
  };

  return html`
    <div class="actions">${items.map(getButtonMarkup).join("")}</div>
  `;
}
