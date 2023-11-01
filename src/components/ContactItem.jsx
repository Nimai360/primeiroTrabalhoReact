import React from 'react';

function ContactItem({ contact, deleteContact, editContact }) {
  return (
    <div className='records'>
      <p>Nome: {contact.name}</p>
      <p>Telefone: {contact.phone}</p>
      <p>Whatsapp: {contact.hasWhatsapp ? 'Sim' : 'Não'}</p>
      <p>Observações: {contact.notes}</p>
      <div className='records-button'>
        <button onClick={() => deleteContact(contact.id)}>Excluir</button>
        <button onClick={() => editContact(contact)}>Editar</button>
      </div>
    </div>
  );
}

export default ContactItem;