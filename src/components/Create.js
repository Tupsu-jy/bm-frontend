import React from 'react';

const Create = (props) => {
    if (!props.show) {
        return null
    }



    return (
        <>
            <h3>Create New Company</h3>
            <form action="http://127.0.0.1:8080/create" method="POST">
                <div class="form-row" hidden="true">
                    <div class="form-group col-md-2">
                        <label>ID</label>
                        <input type="text" id="id" class="form-control" name="id" placeholder="ID" value="4" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Company Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Company Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Business ID</label>
                        <input type="text" class="form-control" name="business_id" placeholder="Business ID" />
                    </div>
                </div>
                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" name="street" placeholder="Street" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Postcode</label>
                        <input type="text" class="form-control" name="postcode" placeholder="Postcode" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>City</label>
                        <input type="text" class="form-control" name="city" placeholder="City" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Phone number</label>
                        <input type="text" class="form-control" name="phone" placeholder="Phone number" />
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
                </div>
            </form>
        </>
    )
}

export default Create
