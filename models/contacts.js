// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");

import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("models", "contacts.json");

const updateContactsStorage = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  return result || null;
};

export const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContactsStorage(contacts);
  return newContact;
};

export const updateContact = async (id, { name, email, phone }) => {
  const contacts = await listContacts();
  const indexContact = contacts.findIndex((contact) => contact.id === id);
  if (indexContact === -1) {
    return null;
  }
  contacts[indexContact] = { id, name, email, phone };
  await updateContactsStorage(contacts);
  return contacts[indexContact];
};

export const removeContact = async (id) => {
  const contacts = await listContacts();
  const indexContact = contacts.findIndex((contact) => contact.id === id);
  if (indexContact === -1) {
    return null;
  }
  const [result] = contacts.splice(indexContact, 1);
  await updateContactsStorage(contacts);
  return result;
};
export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
