import React from 'react';

const Update = (props) => {
    console.log("updatessa"+props.company)
    if (!props.show) {
        return null
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Create New Company</h1>
                <form action="http://127.0.0.1:8080/update" method="POST">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Company Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Company Name" defaultValue={props.company.name}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Business ID</label>
                            <input type="text" className="form-control" name="business_id" placeholder="Business ID"  defaultValue={props.company.business_id}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Street</label>
                        <input type="text" className="form-control" name="street" placeholder="Street"  defaultValue={props.company.street}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Postcode</label>
                            <input type="text" className="form-control" name="postcode" placeholder="Postcode"  defaultValue={props.company.postcode}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" name="city" placeholder="City"  defaultValue={props.company.city}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email"  value={props.company.email}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Phone number</label>
                            <input type="text" className="form-control" name="phone" placeholder="Phone number"  value={props.company.phone}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>ID</label>
                            <input type="text" className="form-control" name="id" placeholder="ID"  value={props.company.id}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info"><i className="fa fa-database"></i>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update