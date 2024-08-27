import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import SearchFilter from "./components/SearchFilter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  // Utility to make strings the same for comparisons
  const normalizeString = (string) => {
    return string.toLowerCase().trim();
  };
  const addPerson = (e) => {
    e.preventDefault();
    // Create new object based on input value
    const newPerson = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber,
    };
    // extract values, normalize the string and compare values.
    const existingName = persons.map((person) => normalizeString(person.name));
    const isDuplicate = existingName.includes(normalizeString(newPerson.name));
    // If name exists/duplicate -> return warning otherwise add name.
    isDuplicate
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));
    // Reset input
    setNewName("");
    setNewNumber("");
  };

  const searchPerson = persons.filter((person) =>
    normalizeString(person.name).includes(normalizeString(searchTerm))
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Add a new</h2>
      <Form
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      {searchPerson.map((person) => (
        <List key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
