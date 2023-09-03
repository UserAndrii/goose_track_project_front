import './index.css';
import './utils/multilang';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import GlobalStyles from 'styles/GlogalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goose_track_project_front">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
 </React.StrictMode>

);
