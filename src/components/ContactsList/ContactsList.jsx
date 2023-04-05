import { useSelector } from 'react-redux';
import Contact from '../ContactItem/ContactItem';
import filterOfContactsArray from '../../service/filterOfContactsArray';
import { getContacts, getFilter } from '../../Redux/selectors';
// styles
import { ContactsList, LabelItem } from './ContactsList.styled';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const toFilter = useSelector(getFilter);
  const filteredContacts = filterOfContactsArray(contacts, toFilter);

  return (
    <ContactsList>
      {contacts[0] && (
        <LabelItem>
          <span>Name:</span>
          <span>Tell:</span>
        </LabelItem>
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

export default ContactList;
