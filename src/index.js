import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
// import { BrowserRouter , Routes, Route } from  " react-router-dom ";
import ReturnOrder from './return_order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}

    {/* <Routes> */}
      <Provider store={store}>
        <App/>
          {/* <Route path="/" element={<App/>}/>
          <Route path="/returnorder" element={<ReturnOrder/>}/> */}
      </Provider>
    {/* </Routes> */}
  {/* </BrowserRouter> */}
  </React.StrictMode>
);


reportWebVitals();
