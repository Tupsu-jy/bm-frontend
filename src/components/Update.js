import React, { useState } from 'react';
import CompaniesService from '../services/CompaniesService';
import Validator from '../services/Validator';

/**
 * Form for updating companies in both to database and frontend list simultaneously.
 * @param props
 * @param props.show - determines if this component should be shown
 * @param props.company - company that is to be updated
 */
const Update = (props) => {

    const [name, setName] = useState(props.company.name)
    const [business_id, setBusiness_id] = useState(props.company.business_id)
    const [street, setStreet] = useState(props.company.street)
    const [postcode, setPostcode] = useState(props.company.postcode)
    const [city, setCity] = useState(props.company.city)
    const [email, setEmail] = useState(props.company.email)
    const [phone, setPhone] = useState(props.company.phone)

    /**
     * Validates the new updated values and if it passes then updates it both in database and 
     * frontend list simultaneously. Creates a popup alert with error message if validation fails
     */
    const validateAndPost = () => {
        let answer=Validator.validate(name,business_id,street,postcode,city,email,phone)
        if(answer==""){
            CompaniesService.update(name,business_id,street,postcode,city,email,phone,props.company.id)
            props.addCompany(name,business_id,street,postcode,city,email,phone,props.company.id)
            
        }else{
            alert(answer)
        }
    }

    if (!props.show) {
        return null
    }
    return (
        <>
        <h3>Update Company</h3>

        <div class="form-row" hidden="true">
            <div class="form-group col-md-2">
                <label>ID</label>
                <input type="text" id="id" class="form-control" name="id" placeholder="ID" value="4" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Company Name</label>
                <input onChange={e => setName(e.target.value)} type="text" class="form-control" name="name" placeholder="Company Name" defaultValue={name}/>
            </div>
            <div class="form-group col-md-6">
                <label>Business ID</label>
                <input onChange={e => setBusiness_id(e.target.value)} type="text" class="form-control" name="business_id" placeholder="Business ID (eg. 1234567-8)" defaultValue={business_id}/>
            </div>
        </div>
        <div class="form-group">
            <label>Street</label>
            <input onChange={e => setStreet(e.target.value)} type="text" class="form-control" name="street" placeholder="Street" defaultValue={street}/>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Postcode</label>
                <input onChange={e => setPostcode(e.target.value)} type="text" class="form-control" name="postcode" placeholder="Postcode" defaultValue={postcode}/>
            </div>
            <div class="form-group col-md-6">
                <label>City</label>
                <input onChange={e => setCity(e.target.value)} type="text" class="form-control" name="city" placeholder="City" defaultValue={city}/>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} type="email" class="form-control" name="email" placeholder="Email" defaultValue={email}/>
            </div>
            <div class="form-group col-md-6">
                <label>Phone number</label>
                <input onChange={e => setPhone(e.target.value)} type="text" class="form-control" name="phone" placeholder="Phone number" defaultValue={phone}/>
            </div>
        </div>

        <div class="form-group">
            <button onClick={()=>validateAndPost(name,business_id,street,postcode,city,email,phone)} 
            class="btn btn-info">
                <i class="fa fa-database"></i> 
                Submit
            </button>
        </div>

    </>

    )
}

export default Update

