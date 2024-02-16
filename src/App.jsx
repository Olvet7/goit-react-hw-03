
// import { ContactForm } from "./components/SearchBar/ContactForm/ContactForm";
import { ContactList } from "./conmponents/Contacts/ContactList/ContactList"
// import "./App.css";

export default function App() {

  const contacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <ContactList contacts={contacts}/>
    </>
  );
}
