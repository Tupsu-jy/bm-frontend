import React from 'react';

const Create = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Create New Company</h1>
                <form action="http://127.0.0.1:8080/create" method="POST">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Company Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Company Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Business ID</label>
                            <input type="text" className="form-control" name="business_id" placeholder="Business ID" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Street</label>
                        <input type="text" className="form-control" name="street" placeholder="Street" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Postcode</label>
                            <input type="text" className="form-control" name="postcode" placeholder="Postcode" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" name="city" placeholder="City" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Phone number</label>
                            <input type="text" className="form-control" name="phone" placeholder="Phone number" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>ID</label>
                            <input type="text" className="form-control" name="id" placeholder="ID" />
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

export default Create