import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
  } catch (error) {
    console.error('Error in writeContacts', error);
  }
};
