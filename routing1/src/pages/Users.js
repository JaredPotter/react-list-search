import React from 'react';

class Users extends React.Component {

    render() {
        return (
            <div>
                <h1>Users</h1>
                <button onClick={ () => this.props.history.push('/contact') }>CLICK ME</button>
            </div>
        );
    }
};

export default Users;