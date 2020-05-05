let companies = ""
var regBid = new RegExp('\\d{7}-\\d$');
var regPC = new RegExp('\\d{5,10}$');
let re=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let rp='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{3,50}$'
var regPhone=new RegExp(rp)

const setCompanies = (appCompanies) => {
    console.log("setter" + appCompanies)
    companies = appCompanies
}


function lengthTest(min, max, str){
    if(str.length<max && str.length>min)
        return true
    else
        return false
}

function validate(name, business_id, street, postcode, city, email, phone) {
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

    for (let i = 0; i < companies.length; i++) {
        if (name == companies[i].name)
            answer = answer.concat("Name already in database\n")
        if (business_id == companies[i].business_id)
            answer = answer.concat("Business id already in database\n")
    }
    return answer
}

export default {
    setCompanies: setCompanies,
    validate: validate
}