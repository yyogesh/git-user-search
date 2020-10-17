import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserSearch = ({ getUserInfo }) => {
    const [query, setQuery] = useState('');

    const url = query && `https://api.github.com/users/${query}`;

    const { status, data, error } = useFetch(url);

    const handleSubmit = (e) => {
        e.preventDefault();

        const query = e.target.search.value;
        if (query) {
            setQuery(query);
            e.target.search.value = '';
        }
    };
    const user = data;
    console.log(user, error)
    getUserInfo(data);

    return (
        <div className="search-user">
            <form className="Form" onSubmit={handleSubmit}>
                <TextField id="standard-basic" style={{ width: '350px' }} name="search" autoFocus autoComplete="off" label="Search git user" />
                <Button variant="contained" type="submit" color="primary">
                    Search user
                </Button>
                {status === 'error' && <div>{error}</div>}
                {status === 'fetching' && <div className="loading"></div>}
                {status === 'fetched' && (
                    <>
                        <div className="query"> Search results for {query} </div>
                        {user.message && <div className="query"> {user.message} </div>}
                    </>
                )}
            </form>
        </div>
    );
};

export default UserSearch;