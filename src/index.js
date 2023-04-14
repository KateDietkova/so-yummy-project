import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/so-yummy-project">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
