import React, {useState, useEffect} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionShowPage from './components/AuctionShowPage'
import AuctionNewPage from './components/AuctionNewPage'
import AuthRoute from './components/AuthRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { User } from './requests';
import SignInPage from './components/SignInPage'

function App(props) {
  const [user, setUser] = useState()

  useEffect(() => {
    getCurrentUser()
    
  }, [])

  const getCurrentUser = () => {
    return User.current().then(user => {
      //This is the safe navigation opreator
      //Similar to user && user.id
      if (user?.id){
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser()}

  return (
    <BrowserRouter>
        <NavBar currentUser={user} onSignOut={onSignOut} />
        <Switch>
          <Route exact path ='/sign_in' 
            render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser}/>}>
          </Route>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/auctions" component={AuctionIndexPage} />
        <AuthRoute exact path="/auctions/new" isAuthenticated={!!user}
          render={(routeProps) => <AuctionNewPage {...routeProps} 
            
          /> }/> 
        <Route exact path="/auctions/:id" {...props} component={AuctionShowPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
