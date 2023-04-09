import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'Redux/operations';
import newContact from 'service/newContact';
import { selectContacts } from 'Redux/selectors';

// import styles
import { Label, Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const onSubmitForm = (values, { resetForm }) => {
    if (newContact(contacts, values.name)) {
      dispatch(addNewContact(values));
      resetForm();
    }
  };

  const initialValues = {
    name: '',
    phone: '',
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
          <span>Phone</span>
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" component="span" />
        </Label>
        <Button type="submit"> Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
