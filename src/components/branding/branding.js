import "./branding.css";
import brandingIcon from "./branding.svg";

export function Branding() {
  const html = String.raw;
  const markup = html`
    <div class="branding">
      <div class="branding__icon-wrapper">
        <img class="branding__icon" src="${brandingIcon}" alt="branding icon" />
      </div>
      <div class="branding__text">Dashboard</div>
    </div>
  `;
  return markup;
}
