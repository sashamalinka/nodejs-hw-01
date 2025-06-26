import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      return;
    }
    console.log('Contacts is allready empty');
  } catch (error) {
    console.log('Error in removeLastContact', error);
  }
};

removeLastContact();
