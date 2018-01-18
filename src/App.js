import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAJA2n0JmfrBlcnlfOuZttBjEFkmP0py_s',
      authDomain: 'manager-7ebaf.firebaseapp.com',
      databaseURL: 'https://manager-7ebaf.firebaseio.com',
      projectId: 'manager-7ebaf',
      storageBucket: 'manager-7ebaf.appspot.com',
      messagingSenderId: '267084559406'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    // I removed View since I dont use it but put <LoginForm directly into 
    // Provider tag.  Also removed it and Text from the import above.
    // I also moved call to createStore from the Provider tag to above const.
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
