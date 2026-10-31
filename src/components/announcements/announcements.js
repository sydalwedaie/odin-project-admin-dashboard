import "./announcements.css";

const list = [
  {
    title: "Community Share Day",
    msg: "Suscipit ratione nobis reiciendis asperiores beatae veniam sit itaque omnis atque! Quaerat numquam veritatis enim vitae?",
  },
  {
    title: "Community Share Day",
    msg: "Consequuntur, laboriosam quae ullam aspernatur eum ipsum corporis minima. Aborum optio eos atque perferendis distinctio velit libero? Voluptate.",
  },
  {
    title: "Community Share Day",
    msg: "Dolores recusandae quidem ipsum modi consequatur culpa, rem similique autem explicabo alias nesciunt, minus, magni repellat!",
  },
];

export function Announcements() {
  const html = String.raw;

  const getItemMarkup = (item) => {
    return html`
      <div class="announcements__item">
        <h2 class="announcements__title heading heading--2">${item.title}</h2>
        <div class="announcements__msg text text--secondary">${item.msg}</div>
      </div>
    `;
  };

  const markup = html`
    <div class="announcements">
      <h1 class="announcements__header heading heading--1">Announcements</h1>
      <div class="announcements__body card">
        ${list.map(getItemMarkup).join("<hr class='announcements__divider' />")}
      </div>
    </div>
  `;

  return markup;
}
