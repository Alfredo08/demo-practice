import React from 'react';
import Profile from './Profile';
import ProfileForm from './ProfileForm';

class App extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      profiles : [{
        firstName : "Michael",
        lastName : "Miller",
        age : 30,
      },
      {
        firstName : "Alex",
        lastName : "Russell",
        age : 25,
      }]
    }
  }

  addProfile = ( event ) => {
    event.preventDefault();
    const firstName = event.currentTarget.firstName.value;
    const lastName = event.currentTarget.lastName.value;
    const age = event.currentTarget.age.value;
    const newProfile = {
      firstName,
      lastName,
      age
    };

    this.setState({
      profiles : [ ...this.state.profiles, newProfile ]
    });
  } 

  render = () => {
    return (
      <div>
        <h1> Profiles </h1>
        {
          this.state.profiles.map( ( profile, index ) => {
            return ( <Profile profile={profile} key={index} /> );
          })
        }
        <ProfileForm addProfile={this.addProfile} />
      </div>
    )
  }
}

export default App;