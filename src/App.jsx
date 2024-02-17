import { useState } from "react";
import { nanoid } from "nanoid";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import "notiflix/dist/notiflix-3.2.7.min.css";

import { ContactForm } from "./conmponents/ContactForm/ContactForm";
import { ContactList } from "./conmponents/Contacts/ContactList/ContactList";
import { SearchBar } from "./conmponents/SearchBar/SearchBar";

import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    return (
      savedContacts || [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      ]
    );
  });

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  // const contacts = [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ]

  const handleAddContact = (newContact) => {
    const isDuplicateName = contacts.some(
      (contact) => contact.name === newContact.name
    );
    if (isDuplicateName) {
      Notify.warning("Already in list", {
        width: "200px",
        fontSize: "20px",
        position: "right-top",
        distance: "50px",
      });
      return;
    }

    const newContactWithId = { id: nanoid(), ...newContact };
    const updatedContacts = [newContactWithId, ...contacts];
    setContacts(updatedContacts);
    window.localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    window.localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <h3>Phonebook</h3>
      <SearchBar value={search} onChange={handleSearchChange} />
      <ContactForm onAddContact={handleAddContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
