import React from 'react';

function ProfileForm( props ){
    return(
        <form onSubmit={(event) => props.addProfile(event)}>
            <label htmlFor="firstName"> First Name: </label>
            <input id="firstName" type="text" />
            <label htmlFor="lastName"> Last Name: </label>
            <input id="lastName" type="text" />
            <label htmlFor="age"> Age: </label>
            <input id="age" type="number" />
            <button type="submit">
                Add Profile
            </button>
        </form>
    );
}

export default ProfileForm;