import axios from 'axios'
const baseUrl = 'http://localhost:8080'
//toteutus kesken mutta idea koossa
/*let setCompanies = "";

const setSetCompanies = (sc) => {
    setCompanies = sc;
    resetAll()
}

const resetAll = () => {
    getAll()
        .then(response => {
            console.log(response)
            setCompanies(response.data)
        })
}
*/
const getAll = () => {
    return axios.get(baseUrl + "/companies")
}

const create = newObject => {
    return axios.post(baseUrl+"/create", newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const del = (id) => {
    console.log(baseUrl + "/delete/" + id)
    return axios.get(baseUrl + "/delete/" + id)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    del: del
}