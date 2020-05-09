import React from 'react';
import CompaniesService from '../services/CompaniesService'

/**
 * Renders all the information of one company and buttons for deleting or updating said company.
 * @param  props
 * @param  props.company - company to be rendered
 * @param  props.removeCompany - removes company from frontend list of companies
 * @param  props.updateButton - sets the page to update and companyUpdate to company given as parameter.
 */
const Company = (props) => {

    return (
        <tr>
            <td>{props.company.id}</td>
            <td>{props.company.name}</td>
            <td>{props.company.street}</td>
            <td>{props.company.postcode}</td>
            <td>{props.company.city}</td>
            <td>{props.company.business_id}</td>
            <td>{props.company.email}</td>
            <td>{props.company.phone}</td>
            <td>
                <button class="btn btn-sm btn-info" type="btn" role="button" onClick={() => props.updateButton(props.company)}>
                    UPDATE
                </button>
                <button class="btn btn-sm btn-link" type="btn" role="button" onClick={() => props.removeCompany(props.company.id)}>
                    DELETE
                </button>
            </td>
        </tr>
    )
}

export default Company
