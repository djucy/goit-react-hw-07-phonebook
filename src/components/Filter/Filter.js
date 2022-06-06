import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from '../CommonStyle/CommoneStyle.module.css';
import s from '../Filter/Filter.module.css';

import { getFilter } from '../redux/contactsSelector';
import actions from '../redux/contactsAction';

const Filter = () => {
  const value = useSelector(getFilter);
  console.log(value)
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(actions.changeFilter(e.target.value));
  };
  return (
    <div className={s.container__filter}>
      <label className={style.label}>
        Find contacts by name
      <input
          className={style.input}
          type="text"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
        />
      </label>
    </div>
  )
};

export default Filter;
