import React from 'react';
/**
 * Renders 3 buttons for navihation and text explaining the app.
 * @param props
 * @param props.setPage - for setting the page useState
 */
const Choices = (props) => {

    return (
        <>
            <div class="col-md-8 offset-md-2" id="text">Business Manager provides a platform for managing a company's interactions with current and potential businesses.
            It helps business-to-business contact management and improves business performance.
            </div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <input class="btn btn-info btn-block text-left" onClick={() => props.setPage('create')} type="button" value="Create" id="submit"></input>
                    </div>
                    <div className="form-group col-md-2">
                        <input class="btn btn-outline-info" onClick={() => props.setPage('search')} type="button" value="Search" id="submit"></input>
                    </div>
                    <div className="form-group col-md-2">
                        <input class="btn btn-outline-info" onClick={() => props.setPage('all')} type="button" value="View All" id="submit"></input>
                    </div>
                </div>
                <div id="locationInfo" className="controls form-inline"></div>
            </form>
        </>
    )
}

export default Choices