import React from 'react';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onDeleteContacts(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
