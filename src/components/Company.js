import React from 'react';
import CompaniesService from './CompaniesService'

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
                <button onClick={()=>props.updateButton(props.company)}>
                    UPDATE
                </button>
                <button onClick={()=>props.removeCompany(props.company.id)}>
                    DELETE
                </button>
            </td>
        </tr>
    )
}

export default Company