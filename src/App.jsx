

import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './components/CommonStyle/CommoneStyle.module.css';



export default function App() {

  return (
    <div className={s.container}>
      <div className={s.conatiner__position}>
        <h1 className={s.title}>Phonebook</h1>
        <Phonebook />
        <h2 className={s.title__secondary}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );

}



