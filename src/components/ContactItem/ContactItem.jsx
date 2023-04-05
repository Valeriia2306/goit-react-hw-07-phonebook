import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/createSliceContacts';
import { Button, ContactItem, ContactName } from './ContactItem.styled';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactName>
        <span> {name}</span> <span>{number}</span>
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

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
