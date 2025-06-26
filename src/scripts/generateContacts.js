import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  if (number <= 0) {
    console.warn('Please enter a number greater than 0');
    return;
  }
  try {
    const old = await readContacts();
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      old.push(contact);
    }
    await writeContacts(old);
  } catch (error) {
    console.log('Not genere contacts', error);
  }
};

generateContacts(5);
