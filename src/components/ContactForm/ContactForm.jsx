import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/createSliceContacts';
import newContact from '../../service/newContact';
import { getContacts } from '../../Redux/selectors';

// import styles
import { Label, Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onSubmitForm = (values, { resetForm }) => {
    if (newContact(contacts, values.name)) {
      dispatch(addContact(values));
      resetForm();
    }
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
      <Form>
        <Label>
          <span> Name</span>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          <span> Number</span>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="span" />
        </Label>
        <Button type="submit"> Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
