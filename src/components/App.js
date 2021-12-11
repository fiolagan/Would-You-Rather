import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import QuestionPage from './QuestionPage'
import Login from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import QuestionNew from './QuestionNew'
import { Redirect } from 'react-router-dom'

class App extends Component {

componentDidMount() {
  this.props.dispatch(handleInitialData())
}



render() {

  let isLoggedIn = false
  if (this.props.authedUser !== '') {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }

  return (
    <Router>
    <Fragment>
      <LoadingBar />
      <div className="App"> 
      
      {this.props.loading === true
            ? null:
            <Nav />  }    
            
            {this.props.loading === true
            ? null:
            isLoggedIn === false ?
            
            <Fragment>
              <Route path='/' component={Login}   />
            </Fragment>:
            isLoggedIn !== false ?
            <Fragment>
              <Route path='/' exact component={Home}  />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/add' exact component={QuestionNew}  />
              <Route path='/leaderboard' exact component={Leaderboard}  />
            </Fragment>:
            
            null } 
      </div>
    </Fragment>
    </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions  }, props) {
  
  return {
    loading: authedUser === null,
    authedUser,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(App)
