import React from 'react';
import './VirtualDashButton.css';
const firebase = require('firebase');

export default class VirtualDashButton extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }
    
    render() {
        return (
            <div className="virtual-dash-button-container">
                <div>{ this.props.name }</div>
                <img src={ this.props.imgUrl } alt={ this.props.name }/>
                <div>{ this.props.productUrl }</div>     
                <button onClick={ this.onOrderNow } >ORDER NOW</button>    
            </div>
        );
    }

    async onOrderNow() {
        const areYouSure = window.confirm();

        if(areYouSure) {            
            firebase.auth().currentUser.getIdToken().then(async function(token) {
                const options = {
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`
                      }), 
                };

                const url = 'http://localhost:5001/dash-8a979/us-central1/helloWorld';
                // const url = 'https://us-central1-dash-8a979.cloudfunctions.net/helloWorld';
    
                const response = await fetch(url, options);

                const text = await response.text();
                
                // call firebase function to order item.
            });            

        }
    }
}