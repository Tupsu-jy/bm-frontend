import React, { useState, useEffect } from 'react';
import Validator from './services/Validator'
import CompaniesService from './services/CompaniesService'
import './App.css';
import Card from './components/Card';


/**
 * Main component. Here we define the necessary useState variables, functions
 * and sites top navigation ba
 */
function App() {
  const [page, setPage] = useState('')
  const [companies, setCompanies] = useState([])
  const [companyUpdate, setCompanyUpdate] = useState('')

  /**
   * Sets the page to update and companyUpdate to company given as parameter.
   * @param {Company} company company that is to be updated.
   */
  const updateButton = (company) => {
    setPage('update')
    setCompanyUpdate(company)
  }


/**
 * Adds the company given in parameters to frontends internal company list.
 * Also removes any possible comapny that shares the same id.
 * @param {String} name 
 * @param {String} business_id 
 * @param {String} street 
 * @param {String} postcode 
 * @param {String} city 
 * @param {String} email 
 * @param {String} phone 
 * @param {String} id 
 */
  const addCompany = (name, business_id, street, postcode, city, email, phone, id) => {
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

  /**
   * Removes company from fronends internal company list that
   * shares the same id as parameter.
   * @param {String} id id of company to be removed 
   */
  const removeCompany = (id) => {
    CompaniesService.del(id)
    setCompanies(
      companies
        .filter(comp => comp.id != id))
  }

  useEffect(() => {
    CompaniesService.getAll()
      .then(response => {
        console.log(response)
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

