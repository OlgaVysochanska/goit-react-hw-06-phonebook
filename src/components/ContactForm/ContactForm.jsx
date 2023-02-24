import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';

import { addContact } from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  let inputValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const onChangingInput = e => {
    const objectKey = e.target.name;
    inputValues[objectKey] = e.target.value;
    return;
  };

  const handleAddContact = data => {
    const name = data.name;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const number = data.number;
    const action = addContact({ name, number });
    dispatch(action);
  };

  const clearForm = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
        handleAddContact(inputValues);
        clearForm(e);
      }}
    >
      <label className={styles.inputBlock}>
        Name
        <input
          onChange={onChangingInput}
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.inputBlock}>
        Number
        <input
          onChange={onChangingInput}
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
