import React from 'react';

function Profile( props ){
    return( 
        <div>
            <h2> {props.profile.firstName} {props.profile.lastName} </h2>
            <p> Age : {props.profile.age} </p>
        </div>
    );
}

export default Profile;