import "./header.css";

export function Header() {
  const html = String.raw;
  const markup = html`
    <div class="header">
      <div class="header__item header__search">Search</div>
      <div class="header__item header__user-profile">User Profile</div>
      <div class="header__item header__user-greet">User Greet</div>
      <div class="header__item header__user-actions">User Actions</div>
    </div>
  `;
  return markup;
}
