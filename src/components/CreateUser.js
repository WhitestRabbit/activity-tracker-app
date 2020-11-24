import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [username, setUsername] = useState('');

    const changeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { username };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    return (
            <div>
                <h1 className="display-3">Create New User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" name="username" placeholder="Enter username..." onChange={changeUsername} />
                    </div>
                    <button className="btn btn-primary">Create User</button>
                </form>
            </div>
    );
}

export default CreateUser;