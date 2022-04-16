import { useState, useEffect } from "react";
import Display from "./components/display";
import Form from "./components/form";
import axios from "axios";



function App() {

  const [persons, setPersons] = useState([{
    name: "Peter Dobany",
    number: "36704767987"
  }])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  //functions

  const submitPerson = (e) => {
    e.preventDefault()
    let newNameObject = {
      name: newName,
      number: newNumber
    }

    const checkNameRepeat = () => {
      let jsonArray = persons.map(person => JSON.stringify(person))
      let newNameString = JSON.stringify(newNameObject)

      if (jsonArray.includes(newNameString)) {
        alert(`${newName} is already added to the phonebook!`)
      } else {
        setPersons(persons.concat(newNameObject))
        setNewName("")
        setNewNumber("")
      }
    }
    checkNameRepeat()
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
