// Problem 5: Understanding the Key Prop and List Rendering in React

// A key is a special string attribute used in React when rendering lists of elements.
// React uses keys to identify which items in a list have changed, been added, or removed.
// This allows React to optimize rendering by avoiding unnecessary re-renders.

// WHY key PROP IS IMPORTANT?
// 1) It ensures efficient updates to the DOM when the list changes.
// 2) Without a key, React may re-render entire lists unnecessarily, reducing performance.
// 3) Keys should be unique among siblings to prevent unexpected rendering issues.


// ----------------------------------------------------------------

// task1 = Debugging
// {contacts.map((contact) => (
//     <li key={contact.id}>{contact.name}</li>
//   ))}
  
// ----------------------------------------------------------------

// task2 = output based question

import React, { useState } from "react";

function App() {
  // Initial contacts array
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
  ]);

  // State for controlled form inputs
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  // Add a new contact to the list
  const addContact = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) return alert("Please fill out all fields.");

    // Add contact with a unique id
    const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
    setContacts([...contacts, { id: newId, ...newContact }]);

    // Reset the form
    setNewContact({ name: "", email: "" });
  };

  // remove contact by id
  const contactRemove = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <div>
      <h1>Contact List</h1>

      {/* Display total no. of contacts */}
      <p>Total contacts: {contacts.length}</p>

      {/* Form to add a new contact */}
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* Render the contact list */}
      <ul>
        {contacts.map((contact) => (
            <li key={contact.id}>
                {contact.name} - {contact.email}{" "}
                <button onClick={()=> contactRemove(contact.id)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


