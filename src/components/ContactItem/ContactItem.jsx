import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';
import { Button, ContactItem, ContactName } from './ContactItem.styled';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactName>
        <span> {name}</span> <span>{phone}</span>
      </ContactName>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};
export default Contact;
