import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Activity from './Activity';

const ActivityList = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetchData();
    // }, [activities]);

    const fetchData = () => {
        axios.get('http://localhost:5000/activities/')
        .then(res => {
            if(res.data.length > 0) {
                console.log(res.data);
                setActivities(res.data);
            } else {
                console.log("No items in collection activities");
            }
        })
        .catch(err => console.log(err));
    }

    const deleteActivity = (id) => {
        axios.delete('http://localhost:5000/activities/'+id)
        .then(res => console.log(res.data));
        setActivities(activities.filter(act => act._id !== id));
    }

    return (
        <div className="jumbotron">
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Duration</th>
                <th scope="col">User</th>
                <th scope="col">Date</th>
                <th scope="col">Urgent?</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                {activities.map( activity => <Activity activity={activity} key={activity._id} deleteAct={deleteActivity}/>
                )}
            </tbody>
        </table>
        </div>
    );
}

export default ActivityList;