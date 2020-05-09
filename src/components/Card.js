import React from 'react';
import Choices from './Choices'
import Create from './Create'
import Update from './Update'
import All from './All'
import Search from './Search'

/**
 * Background for either the company form view or the company list view.
 * The exact size of card depends on which of these two is to be shown.
 * This is determined based on the value of "page" useState.
 * 
 * @param  props
 * @param  props.show - determines if this component should be shown
 * @param  props.setPage - for setting the page useState
 * @param  props.page - determines what content will shown to user
 * @param  props.companies - frontend list of companies
 * @param  props.removeCompany - removes company from frontend list of companies
 * @param  props.company - company that will be updated
 * @param  props.updateButton - sets the page to update and companyUpdate to company given as parameter
 * @param  props.addCompany - Adds the company given in parameters to frontends internal company list
 */
const Card = (props) => {

    if (props.page === 'all' || props.page === 'search' || props.page === '') {
        return (
            <div className="col-md-10 offset-md-1">
                <div class="card">
                    <div class="card-body">
                        <Choices setPage={props.setPage} />

                        <All
                            show={props.page === 'all'}
                            companies={props.companies}
                            removeCompany={props.removeCompany}
                            updateButton={props.updateButton}
                        />

                        <Search
                            show={props.page === 'search'}
                            companies={props.companies}
                            removeCompany={props.removeCompany}
                            updateButton={props.updateButton}
                        />

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-md-6 offset-md-1">
                <div class="card">
                    <div class="card-body">


                        <Create
                            show={props.page === 'create'}
                            addCompany={props.addCompany}
                        />

                        <Update
                            show={props.page === 'update'}
                            company={props.company}
                            addCompany={props.addCompany}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default Card
