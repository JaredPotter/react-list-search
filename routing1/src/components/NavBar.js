import React from 'react';

export default function NavBar(props) {
    return (
        <div>
            <h1>NavBar</h1>
            { props.items }
        </div>
    );
};