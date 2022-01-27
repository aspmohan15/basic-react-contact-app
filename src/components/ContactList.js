import React from 'react';
import { ContactCard } from './ContactCard';

export const ContactList = (props) => {

    // call back for Delete the contact to contaactCard
    const deleteContactHandler = (id) => {
        //send back the id To parent Call back Through id
        props.getContactId(id)
    }

    const rendered = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} ></ContactCard>
    })
    return (
        <>
            <div>{rendered}</div>
        </>
    );
};
