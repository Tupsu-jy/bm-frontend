import axios from 'axios'
const baseUrl = 'http://localhost:8080'
//toteutus kesken mutta idea koossa
/*let companies = "";

const setCompanies=(appCompanies)=>{
    companies=appCompanies
}

function findUniqueId(){

}
*/
const getAll = () => {
    return axios.get(baseUrl + "/companies")
}

const create = (name,business_id,street,postcode,city,email,phone,id) => {

    axios.post(baseUrl+"/create",{
        name: name,
        business_id: business_id,
        street: street,
        postcode: postcode,
        city: city,
        email: email,
        phone: phone,
        id: id
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

}

const update = (name,business_id,street,postcode,city,email,phone,id) => {
    axios.post(baseUrl+"/update",{
        name: name,
        business_id: business_id,
        street: street,
        postcode: postcode,
        city: city,
        email: email,
        phone: phone,
        id: id
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
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