import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ContactForm({ addNewContactDB, editContact }) {
  // console.log(currentContact);
  
  const [contact, setContact] = useState(editContact || { name: '', phone: '', hasWhatsapp: false, notes: '', editMode: false});
  
  useEffect(() => {
    if (editContact) {
      setContact(editContact);
    }
  }, [editContact]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setContact({ ...contact, [e.target.name]: value });
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addNewContactDB(contact);
  //   // addContact(contact);
  //   setContact({ name: '', phone: '', hasWhatsapp: false, notes: '' });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContactDB(contact);
    setContact({ name: '', phone: '', hasWhatsapp: false, notes: '', editMode: false });
    setEditMode(false);
    setCurrentContact(null);
   };
   

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={contact.name} onChange={handleChange} placeholder="Nome" required />
      <input name="phone" value={contact.phone} onChange={handleChange} placeholder="Telefone" required />
      <div className='whats'>
        <p>Tem Whatsapp? </p>
        <input type="checkbox" name="hasWhatsapp" checked={contact.hasWhatsapp} onChange={handleChange} />
      </div>
      <textarea name="notes" value={contact.notes} onChange={handleChange} placeholder="Observações" />
      <div className='buttons-forms'>
        <button type="reset" onClick={() => setContact({ name: '', phone: '', hasWhatsapp: false, notes: '', editMode: false })}>
          Limpar
        </button>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}

export default ContactForm;