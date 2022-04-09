import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderApp = () => {
  ReactDOM.render(<App />,
    document.getElementById('root')
  );
}

export { App }