import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import SearchFilter from "./components/SearchFilter";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Get Data
  useEffect(() => {
    personServices.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
    });
  }, []);

  // Utility to make strings the same for comparisons
  const normalizeString = (string) => {
    return string.toLowerCase().trim();
  };

  // Create Data
  const addPerson = (e) => {
    e.preventDefault();
    // Create new object based on input value
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    // extract values, normalize the string and compare values.
    const existingName = persons.map((person) => normalizeString(person.name));
    const isDuplicate = existingName.includes(normalizeString(newPerson.name));

    // Check if name exists
    if (isDuplicate) {
      const confirmUpdate = window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      );
      // Check if they want to update existing number
      if (confirmUpdate) {
        const getExistingPerson = persons.find(
          (p) => p.name === normalizeString(newPerson.name)
        );
        // Create updated person variable
        const changedPerson = {
          ...getExistingPerson,
          number: newPerson.number,
        };
        // Update existing person in DB with updated data
        personServices
          .update(getExistingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== getExistingPerson.id ? person : returnedPerson
              )
            );
          });
      }
    } else {
      // Create new person
      personServices.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    }

    // Reset input
    setNewName("");
    setNewNumber("");
  };

  // Filter Data
  const searchPerson = persons.filter((person) =>
    normalizeString(person.name).includes(normalizeString(searchTerm))
  );

  // Delete Data
  const deleteOnePerson = (id, name) => {
    if (window.confirm(`delete ${name}?`))
      personServices.deletePerson(id).then((response) => {
        if (response.status === 200)
          setPersons(persons.filter((person) => person.id !== id));
        console.log(`Person deletion succesfull`);
      });
  };

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
        <List
          key={person.name}
          name={person.name}
          number={person.number}
          onDelete={() => deleteOnePerson(person.id, person.name)}
        />
      ))}
    </div>
  );
};

export default App;
