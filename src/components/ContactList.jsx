import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} editContact={editContact} />
      ))}
    </div>
  );
}

export default ContactList;