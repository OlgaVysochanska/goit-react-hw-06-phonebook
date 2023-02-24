import { useSelector } from 'react-redux';

import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const list = filterContacts();

  return (
    <ul className={styles.ul}>
      {list.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id} name={name} number={number} nameId={id} />
        );
      })}
    </ul>
  );
};
