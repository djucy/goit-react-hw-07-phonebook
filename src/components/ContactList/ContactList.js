import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import PropTypes, { arrayOf } from 'prop-types';
import { getContact, getFilteredContacts } from '../../redux/contactsSelector';
import { fetchItems, deleteItems } from '../../redux/contactsOperation';

const ContactList = () => {
  const dispatch = useDispatch();
  const completeContactList = useSelector(getContact);
  const contacts = useSelector(getFilteredContacts);

  useEffect(() =>
    dispatch(fetchItems()), [dispatch])

  const deleteContact = (id) => {
    dispatch(deleteItems(id));

  }

  return (

    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.item}>Name</th>
          <th className={s.item}>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {completeContactList && contacts.map(({ name, phone, id }) => (
          <tr key={id} className={s.item}>
            <td className={s.table__date}>{name}</td>
            <td className={s.table__date}>{phone}</td>
            <td className={s.table__date}><button type="button" className={s.button__delete} onClick={(e) => deleteContact(id)}>
              Delete contact
        </button></td>

          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ContactList;

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  )
}
