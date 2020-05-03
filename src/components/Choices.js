import React from 'react';

const Choices = (props) => {

    return (
        <div className="col-md-10 offset-md-1">
            <h1>Business Manager</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <input onClick={() => props.setPage('create')} type="button" value="Create" id="submit"></input>
                    </div>
                    <div className="form-group col-md-2">
                        <input onClick={() => props.setPage('search')} type="button" value="Search" id="submit"></input>
                    </div>
                    <div className="form-group col-md-2">
                        <input onClick={() => props.setPage('all')} type="button" value="View All" id="submit"></input>
                    </div>
                </div>
                <div id="locationInfo" className="controls form-inline"></div>
            </form>
        </div>
    )
}

export default Choices