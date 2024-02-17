import css from "../Contact/Contact.module.css";
import { Gi3DMeeple } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";

export const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.card}>
      <ul className={css.item}>
        <li className={css.text}><Gi3DMeeple size="24"/>{name}</li>
        <li className={css.text}><GiPerspectiveDiceSixFacesOne size="24"/>{number}</li>
      </ul>
      <button type="button" className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
