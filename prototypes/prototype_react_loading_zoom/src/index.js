import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import FHPage from "./components/fh-kufstein/FHPage";

ReactDOM.render(
  <React.StrictMode>
      <FHPage>
          <App></App>
      </FHPage>
  </React.StrictMode>,
  document.getElementById('root')
);
