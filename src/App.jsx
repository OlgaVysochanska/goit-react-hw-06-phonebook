import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import  setFilter  from 'redux/filter/filter-slice';

export const App = () => {
  const contacts = useSelector(store => store.contacts)
  const filter = useSelector(store => store.filter)
  
  const dispatch = useDispatch();

  // const contactsRef = useRef(contacts.lenght);

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (savedContacts) {
  //     setContacts([...savedContacts]);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contactsRef.current === contacts.length) {
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  //   contactsRef.current = contacts.length;
  // }, [contacts]);

  const handleAddContact = data => {
    const name = data.name;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

const number = data.number;
    const action = addContact( { name, number } );
    dispatch( action );
  };

  const changeFilter = e => {
const action = setFilter(e.target.value)
    dispatch( action );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = id => {
    const action = deleteContact( id );
    dispatch( action );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={getVisibleContacts()} deleting={handleDeleteContact} />
    </>
  );
};
