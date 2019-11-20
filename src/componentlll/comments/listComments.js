import React from "react";
const ListCommemts = (props) => {

    return (
        <div className="col-md-4 card " >

            {props.formDa.map((p,i )=> <li className="list-group-item " key={i}>
                <button type="button" className="close" onClick={() => props.onClickClose}>&times;</button>
                <h5 className="card-title"> {p.Title}</h5>
                <p className="card-text">{p.Body} </p>
            </li>)}
        </div>

    )
};

export default ListCommemts;