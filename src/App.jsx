import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //   formHandlerSubmit = ({ name }) => {
  //     this.setState({
  //       contacts: [
  //         ...this.state.contacts,
  //         { id: this.id, name: this.state.name },
  //       ],
  //     });
  //     console.log(name);
  //   };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(toLowerCaseFilter) ||
        contact.number.toLowerCase().includes(toLowerCaseFilter),
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </>
    );
  }
}

export default App;