import React, { useState, useEffect } from 'react';
import Company from './Company';
import Headers from './Headers';



const Search = (props) => {
    const [name, setName] = useState('')
    const [filteredCompanies, setFilteredCompanies] = useState([])
    const { companies } = props;




    useEffect(() => {
        showFiltered()
    }, [name]);//tähän lisää useStateja jos tahdotaan lissää hakuarvoi

    const showFiltered =()=> {
        console.log(name)
        setFilteredCompanies(companies.filter(company => company.name.toLowerCase().includes(name)))
        //tähän kaikki fillteröinti? tyyliin lisää saman moisia
    }


    if (!props.show) {
        return null
    }
    return (
        <div>
            <p>search by name:</p>
            <input
                onChange={e => setName(e.target.value.toLowerCase())}
            />
            <table class="table table bordered">
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