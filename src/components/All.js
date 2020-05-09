import React from 'react';
import Company from './Company';
import Headers from './Headers';

/**
 * Renders a list of all companies.
 * @param  props
 * @param  props.show - determines if this component should be shown
 * @param  props.companies - frontend list of companies
 * @param  props.removeCompany - removes company from frontend list of companies
 * @param  props.updateButton - sets the page to update and companyUpdate to company given as parameter
 */

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