import { useState, useEffect } from "react";
import Display from "./components/display";
import Form from "./components/form";
import axios from "axios";



function App() {

  //states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  //effect

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => { setPersons(res.data) })
      .catch(err => console.log(404))
  }, [])

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
