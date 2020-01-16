import React from 'react';
import Header from './misc/Header';
import users from './../data/users.json'
import UsersList from './users/UsersList';

class App extends React.Component {
  state = {
    users
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <div className="container-fluid">
          <div className="row">
            <div className="col">Form</div>
            <div className="col">
              <UsersList users={this.state.users}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
