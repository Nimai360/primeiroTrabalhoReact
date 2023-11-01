import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // const addContact = (contact) => {
  //   setContacts([...contacts, { ...contact, id: Math.random().toString() }]);
  // };
  const addContact = (contact) => {
    // if (editMode) {
    //   setContacts(contacts.map((c) => (c.id === currentContact.id ? contact : c)));
    //   setEditMode(false);
    //   setCurrentContact(null);
    // } else {
      setContacts([...contacts, { ...contact, id: Math.random().toString() }]);
    // }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  
  const editContact = (contact) => {
   setEditMode(true);
   setCurrentContact(contact);
   setContacts(contacts.filter((c) => c.id !== contact.id));
  };

return (
  <>
    <div className='entradas'>
      <ContactForm addContact={addContact} editContact={editMode ? currentContact : null} />
      <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    </div>
  </>
);

}