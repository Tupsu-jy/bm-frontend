import React, { useState, useEffect } from 'react';
import Company from './Company';
import Headers from './Headers';



const Search = (props) => {

    const { companies } = props;

    const [filteredCompanies, setFilteredCompanies] = useState(companies);

    const showFilteredByName = (name) => {
        setFilteredCompanies(companies.filter(company => company.name.toLowerCase().includes(name)))
    }
    const showFilteredByCity = (city) => {
        setFilteredCompanies(companies.filter(company => company.city.toLowerCase().includes(city)))
    }
    const showFilteredById = (id) => {
        setFilteredCompanies(companies.filter(company => company.business_id.includes(id)))
    }
    if (!props.show) {
        return null
    }
    return (
        <div>
            <div class="form-row">
            <div class="form-group col-md-3">
                <label>Search by name</label>
                <input onChange={e => showFilteredByName(e.target.value.toLowerCase())} type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3">
                <label>Search by city</label>
                <input onChange={e => showFilteredByCity(e.target.value.toLowerCase())} type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3">
                <label>Search by business id</label>
                <input onChange={e => showFilteredById(e.target.value)} type="text" class="form-control" />
            </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <Headers />
                </thead>
                <tbody>
                    {filteredCompanies.map(company => <Company removeCompany={props.removeCompany} updateButton={props.updateButton} company={company} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Search
/*
<p>search by name:</p>
<input
    onChange={e => showFilteredByName(e.target.value.toLowerCase())}
/>
<p>search by city:</p>
<input
    onChange={e => showFilteredByCity(e.target.value.toLowerCase())}
/>
<p>search by business id:</p>
<input
    onChange={e => showFilteredById(e.target.value)}
/>
*/