import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Navegation from './router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegation />
  </React.StrictMode>
);

