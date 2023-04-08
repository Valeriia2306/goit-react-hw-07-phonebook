import { useSelector } from 'react-redux';
import Contact from '../ContactItem/ContactItem';
import { filteredContacts } from 'Redux/selectors';

// styles
import { ContactsList, LabelItem } from './ContactsList.styled';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  return (
    <ContactsList>
      {contacts[0] && (
        <LabelItem>
          <span>Name:</span>
          <span>Tell:</span>
        </LabelItem>
      )}
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

export default ContactList;
