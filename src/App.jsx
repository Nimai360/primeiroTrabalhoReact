import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import axios from "axios";
import styled from 'styled-components';

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const defaultContact = { name: '', phone: '', hasWhatsapp: false, notes: '', editMode: false };
  const [currentContact, setCurrentContact] = useState(defaultContact);

  const getContactsDB = () => http.get('/contacts');
  const addContactDB = contact => http.post('/contacts', contact);
  const deleteContactDB = id => http.delete(`/contacts/${id}`);
  const updateContactDB = (id, updatedContact) => http.put(`/contacts/${id}`, updatedContact);
  const editContactDB = (contact) => {
  setEditMode(true);
  setCurrentContact(contact);
  setContacts(contacts.filter((c) => c.id !== contact.id));
 };

  const addContact = (contact) => {
      setContacts([...contacts, { ...contact, id: Math.random().toString() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setCurrentContact(defaultContact);
  };
  
  const editContact = (contact) => {
   setEditMode(true);
   contact.editMode = true;
   setCurrentContact(contact);
   removeContactDB(contact.id);
   addContactDB(contact).then(response => {  
     setContacts(contacts.filter((c) => c.id !== contact.id));
     setContacts([...contacts, response.data]);
  });
  };

  const http = axios.create({
    baseURL: "http://localhost:3040"
  });



function addNewContactDB(contact) {
  addContactDB(contact).then(response => {  
    setContacts([...contacts, response.data]);
    setCurrentContact(defaultContact);
    setEditMode(false);
  });
}

function removeContactDB(id) {
  var answer = window.confirm("Deseja excluir este contato?");
  if (answer) {
    deleteContactDB(id).then(() => {
      setContacts(contacts.filter(contact => contact.id !== id));
      setCurrentContact(defaultContact);
      location.reload(true);
    }).catch(error => {
      console.error('An error occurred while deleting the contact:', error);
    });
  }
 }

useEffect(() => {
  getContactsDB().then(response => {
    setContacts(response.data);
  });
}, []);


return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ContactForm addNewContactDB={addNewContactDB} editContact={editMode ? currentContact : defaultContact} />} />
        <Route path="/contatos" element={<ContactList contacts={contacts} deleteContact={removeContactDB} editContact={editContact} getContactsDB={getContactsDB} />} />
      </Routes>
    </BrowserRouter>
  </>
);
}