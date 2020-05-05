import React from 'react';

const Update = (props) => {
    //console.log("updatessa"+props.company)
    if (!props.show) {
        return null
    }

    return (
        <>
            <h3>Create New Company</h3>
            <form action="http://127.0.0.1:8080/create" method="POST">
                <div class="form-row" hidden="">
                    <div class="form-group col-md-2">
                        <label>ID</label>
                        <input pattern="[a-z0-9. -]+" title="Please enter only alphanumeric characters." type="text" id="id" class="form-control" name="id" placeholder="ID" defaultValue="4" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Company Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Company Name" defaultValue={props.company.name} />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Business ID</label>
                        <input type="text" class="form-control" name="business_id" placeholder="Business ID"  defaultValue={props.company.business_id}/>
                    </div>
                </div>
                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" name="street" placeholder="Street"  defaultValue={props.company.street}/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Postcode</label>
                        <input type="text" class="form-control" name="postcode" placeholder="Postcode"  defaultValue={props.company.postcode}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label>City</label>
                        <input type="text" class="form-control" name="city" placeholder="City"  defaultValue={props.company.city}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" placeholder="Email"  defaultValue={props.company.email}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Phone number</label>
                        <input type="text" class="form-control" name="phone" placeholder="Phone number"  defaultValue={props.company.phone}/>
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
                </div>
            </form>
        </>
    )
}

export default Update

//<input type="text" pattern="[a-z0-9. -]+" title="Please enter only alphanumeric characters." name="title" id="frtitle" placeholder="Title" />
