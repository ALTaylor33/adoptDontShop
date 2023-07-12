import React from 'react';
import { client } from "./ApolloClient/client" //imported client
import { ApolloProvider } from '@apollo/client';//imported ApolloProvider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar';
import AppRouter from './components/appRouter/appRoutes';
import Footer from './components/footer/footer';


function App() {
  return (
    <ApolloProvider client = {client}>
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="*" element={<AppRouter />} /> 
      </Routes>
      <Footer />
    </Router>
    </ApolloProvider>
  );
};

export default App;
