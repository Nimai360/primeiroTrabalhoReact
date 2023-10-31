import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, editContact }) {
  
  const [contact, setContact] = useState(editContact || { name: '', phone: '', hasWhatsapp: false, notes: '' });
  
  useEffect(() => {
    if (editContact) {
      setContact(editContact);
    }
  }, [editContact]);

  // const handleChange = (e) => {
  //   setContact({ ...contact, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setContact({ ...contact, [e.target.name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ name: '', phone: '', hasWhatsapp: false, notes: '' });
  };

  // useEffect(() => {
  //   console.log(contact);
  // }, [contact]);
  

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={contact.name} onChange={handleChange} placeholder="Nome" required />
      <input name="phone" value={contact.phone} onChange={handleChange} placeholder="Telefone" required />
      <input type="checkbox" name="hasWhatsapp" checked={contact.hasWhatsapp} onChange={handleChange} />
      <textarea name="notes" value={contact.notes} onChange={handleChange} placeholder="Observações" />
      <button type="submit">Salvar</button>
      <button type="reset" onClick={() => setContact({ name: '', phone: '', hasWhatsapp: false, notes: '' })}>
        Limpar
      </button>
    </form>
  );
}

export default ContactForm;