const Persons = ({ newName, newNumber, onClick }) => {
    return (
        <li>
            {newName}: {newNumber}
            <button onClick={onClick}>Delete</button>
        </li>
    )
}

export default Persons