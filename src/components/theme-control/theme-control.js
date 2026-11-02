import "./theme-control.css";

export function ThemeControl() {
  const html = String.raw;
  const markup = html`
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
  `;
  return markup;
}
