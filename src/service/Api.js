import axios from 'axios';
axios.defaults.baseURL = 'https://642d7ab9bf8cbecdb4076786.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.get('/contacts', contact);
  return response.data;
};

export const deleteContactById = async id => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data.id;
};
