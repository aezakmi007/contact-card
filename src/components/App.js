import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const contacts = [
    {
      id: "1",
      name: "Abdullah",
      email: "abdullahfarhan910@gamil.com",
    },
    {
      id: "2",
      name: "Hiba",
      email: "hibafarhan910@gamil.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
