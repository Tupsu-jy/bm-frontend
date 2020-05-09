let companies = ""
var regBid = new RegExp('\\d{7}-\\d$');
var regPC = new RegExp('\\d{5,10}$');
let re=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let rp='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{3,50}$'
var regPhone=new RegExp(rp)

const setCompanies = (appCompanies) => {
    companies = appCompanies
}

function lengthTest(min, max, str){
    if(str.length<=max && str.length>=min)
        return true
    else
        return false
}

/**
 * Validates given values and if they do not pass add relevant error messages to return value
 * @param name 
 * @param business_id 
 * @param street 
 * @param postcode 
 * @param city 
 * @param email 
 * @param phone 
 * @param update 
 */
function validate(name, business_id, street, postcode, city, email, phone, update) {
    let answer = ""

    if(name=="" || business_id=="" || street=="" || postcode=="" || city=="" || email=="" || phone=="")
        answer = answer.concat("All input fields have to filled\n")

    if(!lengthTest(3,60,name))
        answer = answer.concat("Company name has to between 3-60 characters long\n")

    if(!regBid.test(business_id))
        answer = answer.concat("Business id has to be in format '1234567-8'\n")

    if(!lengthTest(3,60,street))
        answer = answer.concat("Street name has to between 3-60 characters long\n")

    if(!regPC.test(postcode))
        answer = answer.concat("Postcode has to be between 5-10 digits long and all numbers\n")

    if(!lengthTest(3,60,city))
        answer = answer.concat("City name has to between 3-60 characters long\n")    

    if(!re.test(email))
        answer = answer.concat("Not a valid email\n")

    if(!regPhone.test(phone))
        answer = answer.concat("Not a valid phone number\n")

    if(update)
    answer = answer.concat(uniquenessTest(name,business_id))

    return answer
}

function uniquenessTest(name,business_id){
    let answer=""
    for (let i = 0; i < companies.length; i++) {
        if (name == companies[i].name)
            answer = answer.concat("Name already in database\n")
        if (business_id == companies[i].business_id)
            answer = answer.concat("Business id already in database\n")
    }
    return answer
}

/**
 * Returns number that is one bigger than biggest id in list of companies
 */
function createUniqueId(){
    if(companies.length==0)
        return 1

    let biggest=companies[0].id
    for (let i = 1; i < companies.length; i++) {
        if(companies[i].id>biggest)
            biggest=companies[i].id
    }
    return biggest+1
}

export default {
    setCompanies: setCompanies,
    validate: validate,
    createUniqueId:createUniqueId
}