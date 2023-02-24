import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsSlice';

import styles from './ContactListItem.module.css';

export const ContactListItem = ({ nameId, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <li className={styles.listItem}>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        className={styles.button}
        onClick={() => handleDeleteContact(nameId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
