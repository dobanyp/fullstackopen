import { useState, useEffect } from "react";
import Display from "./components/display";
import Form from "./components/form";
import personService from "./services/calls"
import axios from "axios";



function App() {

  //states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  //effect

  useEffect(() => {
    personService
      .getAll()
      .then(res => setPersons(res.data))
  }, [])

  //functions
  const submitPerson = (e) => {
    e.preventDefault()
    let newNameObject = {
      name: newName,
      number: newNumber
    }
    personService
      .create(newNameObject)
      .then(res => (setPersons(persons.concat(res.data))))
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <>
      <h1>Phonebook</h1>
      <Form newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} onSubmit={submitPerson} />
      <h2>Numbers</h2>
      <Display persons={persons} />
    </>
  );
}

export default App;
