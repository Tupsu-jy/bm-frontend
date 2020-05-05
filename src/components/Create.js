import React, { useState, useEffect } from 'react';
import CompaniesService from './CompaniesService';
import Validator from './Validator';



const Create = (props) => {

    const [name, setName] = useState('')
    const [business_id, setBusiness_id] = useState('')
    const [street, setStreet] = useState('')
    const [postcode, setPostcode] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const validateAndPost = () => {

        let answer=Validator.validate(name,business_id,street,postcode,city,email,phone)
        if(answer==""){
            CompaniesService.create(name,business_id,street,postcode,city,email,phone)
        }else{
            alert(answer)
        }
        
        
    }

    if (!props.show) {
        return null
    }



    return (
        <>
            <h3>Create New Company</h3>

            <div class="form-row" hidden="true">
                <div class="form-group col-md-2">
                    <label>ID</label>
                    <input type="text" id="id" class="form-control" name="id" placeholder="ID" value="4" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Company Name</label>
                    <input onChange={e => setName(e.target.value)} type="text" class="form-control" name="name" placeholder="Company Name" />
                </div>
                <div class="form-group col-md-6">
                    <label>Business ID</label>
                    <input onChange={e => setBusiness_id(e.target.value)} type="text" class="form-control" name="business_id" placeholder="Business ID (eg. 1234567-8)" />
                </div>
            </div>
            <div class="form-group">
                <label>Street</label>
                <input onChange={e => setStreet(e.target.value)} type="text" class="form-control" name="street" placeholder="Street" />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Postcode</label>
                    <input onChange={e => setPostcode(e.target.value)} type="text" class="form-control" name="postcode" placeholder="Postcode" />
                </div>
                <div class="form-group col-md-6">
                    <label>City</label>
                    <input onChange={e => setCity(e.target.value)} type="text" class="form-control" name="city" placeholder="City" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" class="form-control" name="email" placeholder="Email" />
                </div>
                <div class="form-group col-md-6">
                    <label>Phone number</label>
                    <input onChange={e => setPhone(e.target.value)} type="text" class="form-control" name="phone" placeholder="Phone number" />
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

export default Create
