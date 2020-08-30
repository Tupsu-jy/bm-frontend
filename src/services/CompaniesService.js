import axios from 'axios'
const baseUrl = 'http://localhost:8085'

/**
 * Gets the json representation of all companies from database thru the
 * rest api
 */
const getAll = () => {
    return axios.get(baseUrl + "/companies")
}

/**
 * Adds a new company to database
 * @param name 
 * @param business_id 
 * @param street 
 * @param postcode 
 * @param city 
 * @param email 
 * @param phone 
 * @param id 
 */
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

/**
 * Updates a company in database
 * @param  name 
 * @param  business_id 
 * @param  street 
 * @param  postcode 
 * @param  city 
 * @param  email 
 * @param  phone 
 * @param  id 
 */
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

/**
 * Removes given company from database
 * @param id - id of comapny to delete
 */
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
