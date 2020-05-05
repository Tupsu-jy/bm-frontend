import React, { useState, useEffect } from 'react';
import Validator from './components/Validator'
import Create from './components/Create'
import All from './components/All'
import Search from './components/Search'
import CompaniesService from './components/CompaniesService'
import './App.css';
import Update from './components/Update';
import Card from './components/Card';



function App() {
  const [page, setPage] = useState('all')
  const [companies, setCompanies] = useState([])
  const [companyUpdate, setCompanyUpdate] = useState('')
console.log(page)
  const updateButton = (company) => {
    setPage('update')
    setCompanyUpdate(company)
  }



  const addCompany = (name,business_id,street,postcode,city,email,phone,id) => {
    const company = {
      business_id: business_id,
      city: city,
      email: email,
      id: id,
      name: name,
      phone: phone,
      postcode: postcode,
      street: street
    }
    setPage('')

    setCompanies(
      companies
      .filter(comp => comp.id != id)
      .concat(company))
  }

  const removeCompany = (id) => {
    CompaniesService.del(id)
    setCompanies(
      companies
        .filter(comp => comp.id != id))
  }

  useEffect(() => {
    CompaniesService.getAll()
      .then(response => {
        setCompanies(response.data.rows)
        Validator.setCompanies(response.data.rows)
      })
  }, [])

  return (



    <div className="App">

      <nav class="navbar navbar-expand-sm navbar-dark">

        <a class="navbar-brand" onClick={() => setPage("")}><h2>Business Manager</h2></a>
      </nav>
      <Card
        setPage={setPage}
        page={page}
        companies={companies}
        removeCompany={removeCompany}
        addCompany={addCompany}
        updateButton={updateButton}
        company={companyUpdate}
      />




    </div>
  );
}

export default App;

