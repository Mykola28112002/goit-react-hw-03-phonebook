
import { Div } from './App.styled';
import React, { Component } from "react";
// import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  addContact = ({name,number,contacts}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (contacts.some(contact => contact.name === name)) {
        return alert(`${contact.name} is already in contacts`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      filter: '',
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return <Div className='thema'>
      <Section title="Phonebook">
        <ContactForm  onSubmit={this.addContact} />
      </Section>
      <Section title="Contacts">
        <Filter  value={filter} onChange={this.changeFilter}/>
        <ContactList
          contacts={visibleContacts}
          onDeleteContactList={this.deleteContact}
        />
      </Section>
    </Div>
  }
}