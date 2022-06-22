import { useState } from 'react';
import style from '../CommonStyle/CommoneStyle.module.css';
import s from '../Phonebook/Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { getContact } from '../../redux/contactsSelector';
import { postItems } from '../../redux/contactsOperation';


export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const onNameInput = e => {
    setName(e.target.value);
  };
  const onNumberInput = e => {
    setNumber(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const userName = contacts.find(
      user => user.name === contact.name,
    );

    if (userName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(postItems(contact));
    setName('');
    setNumber('');
  };



  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <label className={style.label}>
        Name
          <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onNameInput}
        />
      </label>
      <label className={style.label}>
        Number
          <input className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onNumberInput}
        />
      </label>

      <button type="submit" className={s.button}>Add contact</button>
    </form>
  );
}

