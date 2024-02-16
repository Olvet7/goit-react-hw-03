import css from "../Contact/Contact.module.css";

export const Contact = ({ name, number }) => {
  return (
    <div className={css.card}>
      <ul className={css.item}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button type="button" className={css.btn}>
        Delete
      </button>
    </div>
  );
};
