import React from 'react';

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

/*
<div class="row">
    <div class="col-md-10 offset-md-1">
        <div class="card">
        <div class="card-body">
            <div class="col-md-8 offset-md-2" id="text"><br>Business Manager provides a platform for managing a company's interactions with current and potential businesses.
              It helps business-to-business contact management and improves business performance. <br>
            </div>
            <br>
        <form>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <a class="btn btn-info btn-block text-left" type="btn" role="button" href="create.html"><i class="fa fa-plus"></i> &nbsp; Create New Company</a>
                </div>
                <div class="form-group col-md-2">
                    <button class="btn btn-outline-info" onclick="makeQuery()" type="button" id="submit"> <i class="fa fa-server"></i> &nbsp; View All</button>
                </div>
            </div>
             <div id="locationInfo" class="controls form-inline"></div>
        </form>
        </div></div>
    </div>
</div>
*/