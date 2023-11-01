import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <div className='list' style={{ maxHeight: '330px', overflow: 'auto' }}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} editContact={editContact} />
      ))}
    </div>
  );
}

export default ContactList;