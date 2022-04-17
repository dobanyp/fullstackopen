import Persons from "./persons"
import personService from "../services/calls"

const Display = ({ persons }) => {
    return (
        <>
            {persons.map(person => {
                return (
                    <Persons key={person.id} newName={person.name} newNumber={person.number} />
                )
            })}
        </>
    )
}

export default Display