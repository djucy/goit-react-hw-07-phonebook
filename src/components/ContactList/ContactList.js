import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import PropTypes, { arrayOf } from 'prop-types';
import actions from '../redux/contacts-action';
import { getContact, getFilter } from '../redux/contacts-selector';


const ContactList = () => {
  const completeContactList = useSelector(getContact);
  const filter = useSelector(getFilter);
  
  const dispatch = useDispatch();
  
  const contacts = completeContactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
  
  <table className={s.table}>
   <thead>
    <tr>
      <th className={s.item }>Name</th>
      <th className={s.item }>Number</th>
      <th></th>
      </tr>
    </thead>
    <tbody>
        {contacts.map(({ name, number, id }) =>  (
      <tr key={id} className={s.item }>
        <td className ={s.table__date}>{ name}</td>
        <td className ={s.table__date}>{number}</td>
            <td className={s.table__date}><button type="button" className={s.button__delete} onClick={()=>dispatch(actions.deleteContact(id))}>
           Delete contact
        </button></td>
        
    </tr>
        ))}
      </tbody>
  </table>
)} ;

export default ContactList;
ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id:PropTypes.string.isRequired,
    }),
  )

}