import React from 'react';
import Company from './Company';
import Headers from './Headers';

const All = (props) => {
    console.log(props.companies)
    const {companies}=props;

    if (!props.show) {
        return null
      }
    return(
        <div>
            <table class="table table-bordered">
                <thead>
                    <Headers/>
                </thead>
                <tbody>
                    {companies.map(company => <Company removeCompany={props.removeCompany} updateButton={props.updateButton} company={company}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default All