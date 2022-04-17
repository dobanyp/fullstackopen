import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return (
        axios.get(baseUrl)
    )
}

const create = newObject => {
    return (
        axios.post(baseUrl, newObject)
    )
}

const del = (id) => {
    if (window.confirm("Do you want to delete this person?"))
        return (
            axios.delete(`${baseUrl}/${id}`)
        )

}

export default { getAll, create, del }