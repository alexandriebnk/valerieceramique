import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './sass/main.scss';

const prodURL = 'https://ceramique-vm-back.herokuapp.com/graphql';
const localURL = 'http://localhost:1337/graphql';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? prodURL : localURL,

  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
