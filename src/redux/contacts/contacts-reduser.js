import { createReducer } from "@reduxjs/toolkit";

import { addContact, deleteContact } from "./contacts-actions";

export const contactsReducer = createReducer( [], {
    [ addContact ]: ( state, { payload } ) => {
        state.push( payload );
    },
    [ deleteContact ]: ( state, { payload } ) => state.filter( item => item.id !== payload )
});