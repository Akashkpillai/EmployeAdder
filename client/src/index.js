import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './Components/Redux/store'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { UserAuhtContextProvider } from './Context/AuthContext';

let persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuhtContextProvider>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />    
      <ToastContainer/>
    </PersistGate>
  </Provider>
  </UserAuhtContextProvider>

);


