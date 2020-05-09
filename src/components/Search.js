import React, { useState, useEffect } from 'react';
import Company from './Company';
import Headers from './Headers';


/**
 * Renders 3 input fields for searching for companies and also renders all companies that meet 
 * the search term put into them
 * @param  props 
 * @param  props.show - determines if this component should be shown
 * @param  props.companies - frontend list of companies
 * @param  props.removeCompany - removes company from frontend list of companies
 * @param  props.updateButton - sets the page to update and companyUpdate to company given as parameter
 */
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