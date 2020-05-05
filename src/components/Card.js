import React from 'react';
import Choices from './Choices'
import Create from './Create'
import Update from './Update'
import All from './All'
import Search from './Search'

const Card = (props) => {
    
    if (props.page === 'all' || props.page === 'search' || props.page === ''){
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
    
                    </div></div>
            </div>
        )
    }else{
        return (
            <div className="col-md-6 offset-md-1">
                <div class="card">
                    <div class="card-body">

    
                        <Create
                            show={props.page === 'create'}
                        />
    
                        <Update
                            show={props.page === 'update'}
                            company={props.company}
                        />
                    </div></div>
            </div>
        )
    }

}

export default Card
