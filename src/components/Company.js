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
                <button class="btn btn-sm btn-info" type="btn" role="button" onClick={()=>props.updateButton(props.company)}>
                    UPDATE
                </button>
                <button class="btn btn-sm btn-link" type="btn" role="button" onClick={()=>props.removeCompany(props.company.id)}>
                    DELETE
                </button>
            </td>
        </tr>
    )
}

export default Company
//<a class="btn btn-sm btn-link" type="btn" role="button" href="http://127.0.0.1:8080/delete/2">Delete</a>
//<a class="btn btn-sm btn-info" type="btn" role="button" href="http://127.0.0.1:8080/select/2/Techno Polis Oy/Karamalmintie 33/27640/Espoo/146789-9/techno.polis@gmail.com/050-4788766">Update</a>