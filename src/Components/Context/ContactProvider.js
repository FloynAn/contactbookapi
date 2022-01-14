import axios from 'axios';
import React, { createContext,  useReducer } from 'react';
import { API } from '../Helpers/constants';

export const ContactContext = createContext()

const INIT_STATE = {
    contacts: null,
    contactToEdit: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "GET_CONTACTS": 
            return {state,contacts: action.payload}
        case "GET_CONTACT_TO_EDIT": 
            return {...state, contactToEdit: action.payload}
        default:
            return state
    }
}

const ContactProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    //!CREATE
    async function addContact (newContact){
        try{
            await axios.post(API, newContact)
            getContacts()
        }catch(error){
            console.log(error);
        }
    }

    //! GET

    async function getContacts(){
        try{
            let res = await axios (API)
            let action = {
                type:'GET_CONTACTS',
                payload: res.data
            }
            dispatch(action)
        }catch(error){
            console.log(error);
        }
    }

    //! EDIT

    async function getContactToEdit(id){
        try{
            let res = await axios (`${API}/${id}`)
            let action = {
                type:"GET_CONTACT_TO_EDIT",
                payload:res.data
            }
            dispatch(action)
        }catch(error) {
        console.log(error);
        }
    }

    async function saveEditedContact (editedContact){
        try{
            await axios.patch(`${API}/${editedContact.id}`, editedContact)
            getContacts()
        }catch(error){
            console.log(error);
        }
    }


    //! DELETE
    
    async function deleteContact (id) {
        try {
            await axios.delete(`${API}/${id}`)
            getContacts()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <ContactContext.Provider
                value={{
                    addContact: addContact,
                    getContacts: getContacts,
                    getContactToEdit: getContactToEdit,
                    saveEditedContact: saveEditedContact,
                    deleteContact: deleteContact,
                    contacts: state.contacts,
                    contactToEdit: state.contactToEdit
                }}
            >
                {props.children}
            </ContactContext.Provider>   
        </div>
    );
};

export default ContactProvider;