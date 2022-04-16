const Form = (props) => {
    const { newName, newNumber, handleNewName, handleNewNumber, onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <div>
                Name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
                Number: <input data="Number:" value={newNumber} onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form