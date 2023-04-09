import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';
import {
  Icons,
  Button,
  ContactItem,
  ContactName,
  Wrapper,
} from './ContactItem.styled';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <Wrapper>
        <Icons>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9069/9069049.png"
            alt="avatar"
            width={35}
          />
        </Icons>
        <ContactName>{name}</ContactName>
      </Wrapper>
      <span>{phone}</span>
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
