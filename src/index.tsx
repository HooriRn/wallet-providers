import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// `ChakraProvider` component UI
import { ChakraProvider } from '@chakra-ui/react'
// Extended Theme
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const main = (
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)

root.render(
  <React.StrictMode>
    {main}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
