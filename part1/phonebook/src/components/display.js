import Persons from "./persons"

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