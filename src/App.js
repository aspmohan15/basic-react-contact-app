import { useState, useEffect } from "react";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuid } from "uuid"
function App() {
  const Local_storege_key = "contacts"
  const [contacts, setContacts] = useState([])


  // add the new contact
  const addcontactHandler = (newContact) => {

    setContacts([...contacts, { id: uuid(), ...newContact }])

  }

  //! delete contact by using get the id of particular contact
  const removeContactHandler = (id) => {
    //copy of the contact List
    const newContactAfterDelete = contacts.filter((contact) => {
      return contact.id !== id
    })
    // set state after new contact is created

    setContacts(newContactAfterDelete)

  }

  useEffect(() => {
    const retrivedData = JSON.parse(localStorage.getItem(Local_storege_key))
    if (retrivedData) setContacts(retrivedData)
    console.log(retrivedData);
  }, [])


  useEffect(() => {

    localStorage.setItem(Local_storege_key, JSON.stringify(contacts))
  }, [contacts])




  return (
    <div className="App">
      <Header />
      <div className="App" style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",

        alignItems: "center",
        width: "100%",
        height: "100vh"
      }}>



        <AddContact addcontactHandler={addcontactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </div>
  );
}

export default App;
