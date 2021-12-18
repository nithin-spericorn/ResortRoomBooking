import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider}from "react-redux"
import {store,persistor} from "./redux/Store"
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
         <PersistGate  persistor={persistor}>
              <App />
         </PersistGate>
</Provider>
, document.getElementById('root'));