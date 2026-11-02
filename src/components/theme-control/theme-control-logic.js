export function ThemeControlLogic() {
  const toggleModeEl = document.querySelector(".theme-control__toggle-mode");
  const toggleTextEl = document.querySelector(".theme-control__toggle-text");
  const toggleColorEl = document.querySelector(".theme-control__toggle-color");
  const rootEl = document.querySelector("html");

  toggleModeEl.addEventListener("click", () => {
    rootEl.classList.toggle("dark");
    const isDark = rootEl.classList.contains("dark");
    toggleTextEl.textContent = isDark
      ? "Toggle Light Mode"
      : "Toggle Dark Mode";
  });

  toggleColorEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.closest("button")) return;
    rootEl.classList.remove("theme--color--blue");
    rootEl.classList.remove("theme--color--green");
    rootEl.classList.remove("theme--color--purple");
    const color = e.target.dataset.color;
    rootEl.classList.add(`theme--color--${color}`);
  });
}
