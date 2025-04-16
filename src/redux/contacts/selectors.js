import { createSelector } from "@reduxjs/toolkit";
import { selectQuery } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectQuery],
  (contacts, query) => {
    const normalizedQuery = query.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedQuery)
    );
  }
);