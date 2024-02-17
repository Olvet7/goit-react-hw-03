import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css"

export const ContactList = ({ contacts, onDeleteContact}) => {
  console.log(contacts);
  return (
    <div className={css.card}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)}/>
      ))}
    </div>
  );
};
