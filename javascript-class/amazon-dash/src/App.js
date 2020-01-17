import React from 'react';
import './App.css';
import VirtualDashButton from './components/VirtualDashButton/VirtualDashButton';

var firebase = require('firebase');
// const dotenv = require('dotenv')

// const env = dotenv.config({ path: './'});
// const env = dotenv.config();

// console.log(process.env)

// debugger;

const firebaseConfig = {
  apiKey: "AIzaSyDkhVgQumQ4GFtnbCLTjK0PN_rxPmCwJRQ",
  authDomain: "dash-8a979.firebaseapp.com",
  databaseURL: "https://dash-8a979.firebaseio.com",
  projectId: "dash-8a979",
  storageBucket: "dash-8a979.appspot.com",
  messagingSenderId: "168833902772",
  appId: "1:168833902772:web:4c2b2b9e1f49494cd14fe1",
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// debugger;/

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: 'jaredpotter1@gmail.com', 
      password: 'Chaosman37*x',
      products: [
        {
          name: 'B12',
          imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Doa6WhmkL._AC_SY679_.jpg',
          productUrl: 'https://www.amazon.com/gp/product/B002FJW3ZY'
        }
      ]
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.login(); // for dev
  }

  render() {
    if(this.state.user) {
      const productList = this.state.products.map((item, index) => {

        return (
          <VirtualDashButton
            name={ item.name }
            imgUrl={ item.imgUrl }
            productUrl={ item.productUrl }
            key={ index }
          />
        );
      })


      return (
        <div className="App">
          <h1>Amazon Dash</h1>
          <button onClick={this.logout}>Logout</button>
          <div className="virtual-dash-button-container">
            { productList }
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <h1>Amazon Dash</h1>
          { this.renderLoginForm() }
        </div>
      );
    }
  }

  renderLoginForm() {
    const email = this.state.email;
    const password = this.state.password;

    return (
      <div className="login-container">
        <div className="field">
          <label for="email">Email:</label>
          <input type="email" name="email" value={email}/>
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={password}/>
        </div>      
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
  
  login() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        this.setState({user: response.user});
      })
      .catch((error) => {
        debugger;
      });
  }  

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({user: null});
      });
  }
}





export default App;
