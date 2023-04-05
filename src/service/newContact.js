import { Report } from 'notiflix';

const newContact = (contacts, contactName) => {
  console.log(contacts.contacts);
  if (contacts.some(({ name }) => name === contactName)) {
    Report.warning(`${contactName} is already in contacts`);
    return false;
  }
  return true;
};

export default newContact;
