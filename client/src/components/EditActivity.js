import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const EditActivity = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [urgency, setUrgency] = useState(false);
    const [username, setUsername] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // http://localhost:5000
        axios.get('/activities/'+props.match.params.id)
        .then(res => {
            setTitle(res.data.title);
            setDescription(res.data.description);
            setUrgency(res.data.urgency);
            setUsername(res.data.username);
            setDuration(res.data.duration);
            setDate(new Date(res.data.date));
        });
        // http://localhost:5000
        axios.get('/users/')
        .then(res => {
            if(res.data.length > 0) {
                console.log(res.data);
                setUsers(res.data.map(user => user.username));
                setUsername(res.data[0].username);
            } else {
                console.log("No users were returned.");
            }
        });
    }, []);

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeDescription = (e) => {
        setDescription(e.target.value);
    }

    const toggleUrgency = () => {
        setUrgency(!urgency);
    }

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }

    const changeDuration = (e) => {
        setDuration(e.target.value);
    }

    const changeDate = (date) => {
        setDate(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const activity = {
            title,
            description,
            urgency,
            username,
            duration,
            date
        }

        console.log(activity);

        // http://localhost:5000
        axios.post('/activities/edit/'+props.match.params.id, activity)
        .then(res => console.log(res.data));

        window.location = '/';
    }
    

    return (
        <div>
            <h1 className="display-3">Update Log</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Activity Title</label>
                    <input className="form-control" type="text" name="title" value={title} onChange={changeTitle} />
                </div>
                <div className="form-group">
                    <label>Activity Description</label>
                    <input className="form-control" type="text" name="description" value={description} onChange={changeDescription} />
                </div>
                <div className="form-row">
                    <div className="form-inline col">
                        <label className="pr-2">Activity Duration (Minutes)</label>
                        <input className="form-control" type="number" name="duration" value={duration} min="1" step="1" onChange={changeDuration} />
                    </div>
                    <div className="col">
                        <label className="pr-2">Date</label>
                        <DatePicker className="form-control" selected={date} onChange={changeDate}/>
                    </div>
                    <div className="form-group form-check">
                        <input className="form-check-input" type="checkbox" name="urgency" checked={urgency} onChange={toggleUrgency} />
                        <label className="form-check-label">Check this box if activity is <strong>urgent</strong>.</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>User</label>
                    <select className="form-control" name="username" onChange={changeUsername} value={username}>
                        {users.map( (user, index) => {
                            return <option key={index} value={user}>{user}</option>
                        })}
                    </select>
                </div>
                <button className="btn btn-primary">Edit Activity</button>
            </form>
        </div>
    );
}

export default EditActivity;