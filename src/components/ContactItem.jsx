import React from 'react';

function ContactItem({ contact, deleteContact, editContact }) {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <p>{contact.hasWhatsapp ? 'Possui Whatsapp' : 'Não possui Whatsapp'}</p>
      <p>{contact.notes}</p>
      <button onClick={() => deleteContact(contact.id)}>Excluir</button>
      <button onClick={() => editContact(contact)}>Editar</button>
    </div>
  );
}

export default ContactItem;