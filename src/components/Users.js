import React, { Component } from 'react';

class Users extends Component {        
    render() {
        const name = 'Tester';       
        return (
            <div>
                <h1>This is Users.js</h1>
                <User name={ name }/>
            </div>
        )
    }
}

class User extends Component {
    render() {
        return (
            <div>
                My name is { this.props.name }...
            </div>
        )
    }
}

export default Users;