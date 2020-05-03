import React, { useState, useEffect } from 'react';
import Choices from './components/Choices'
import Create from './components/Create'
import All from './components/All'
import Search from './components/Search'
import CompaniesService from './components/CompaniesService'
import './App.css';
import Update from './components/Update';

function App() {
  const [page, setPage] = useState('all')
  const [companies, setCompanies] = useState([])
  const [companyUpdate, setCompanyUpdate] = useState('all')

  const updateButton = (company) => {
    setPage('update')
    setCompanyUpdate(company)
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
      })
  }, [])

  return (
    <div className="App">
      <Choices setPage={setPage} />

      <Create
        show={page === 'create'}
      />

      <Update
        show={page === 'update'}
        company={companyUpdate}
      />

      <All
        show={page === 'all'}
        companies={companies}
        removeCompany={removeCompany}
        updateButton={updateButton}
      />

      <Search
        show={page === 'search'}
        companies={companies}
        removeCompany={removeCompany}
        updateButton={updateButton}
      />
    </div>
  );
}

export default App;
