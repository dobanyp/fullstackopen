import Persons from "./persons"
import personService from "../services/calls"

const Display = ({ persons, setPersons }) => {

    const onDelete = (id) => {
        personService
            .del(id)
            .then(setPersons(persons.filter(person => person.id !== id)))
    }
    return (
        <>
            {persons.map(person => {
                return (
                    <Persons key={person.id} newName={person.name} newNumber={person.number} onClick={() => {
                        onDelete(person.id)
                    }} />
                )
            })}
        </>
    )
}

export default Display