import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import "notiflix/dist/notiflix-3.2.7.min.css";

import { ContactForm } from "./conmponents/ContactForm/ContactForm";
import { ContactList } from "./conmponents/Contacts/ContactList/ContactList";
import { SearchBox } from "./conmponents/SearchBox/SearchBox";

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

  useEffect(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if(savedContacts) {
      setContacts(savedContacts)
    } 
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  

  const handleSearchChange = (value) => {
    setSearch(value);
  };

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
      <SearchBox value={search} onChange={handleSearchChange} />
      <ContactForm onAddContact={handleAddContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
