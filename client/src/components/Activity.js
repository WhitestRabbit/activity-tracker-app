import React from 'react';
import { Link } from 'react-router-dom';

const Activity = (props) => {
    return (
        <tr>
            <td>{props.activity.title}</td>
            <td>{props.activity.description}</td>
            <td>{props.activity.duration}</td>
            <td>{props.activity.username}</td>
            <td>{props.activity.date.substring(0,10)}</td>
            <td>{props.activity.urgency ? 'Yes' : 'No'}</td>
            <td><Link className="btn btn-outline-info" to={"/edit/"+props.activity._id}>Edit</Link></td>
            <td><button className="btn btn-outline-danger" onClick={() => {props.deleteAct(props.activity._id)}}>Delete</button></td>
        </tr>
    );
}

export default Activity;