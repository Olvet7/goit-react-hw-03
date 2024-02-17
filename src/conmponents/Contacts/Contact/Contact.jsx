import css from "../Contact/Contact.module.css";

export const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.card}>
      <ul className={css.item}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button type="button" className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
