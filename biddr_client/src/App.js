import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionShowPage from './components/AuctionShowPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App(props) {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auctions" element={<AuctionIndexPage />} />
        <Route path="/auctions/:id" {...props} element={<AuctionShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
