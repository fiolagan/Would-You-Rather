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
            isLoggedIn !== false ?
            <Route path='/questions/:id' component={QuestionPage} />:
            null  }

            {this.props.loading === true  
            ? null:
            isLoggedIn !== false ?
            <Route path='/' exact component={Home}  />:
            null
             }

            {this.props.loading === true  
            ? null:
            isLoggedIn !== false ?
            <Route path='/add' exact component={QuestionNew}  />:
            null
             }

            {this.props.loading === true  
            ? null:
            isLoggedIn !== false ?
            <Route path='/leaderboard' exact component={Leaderboard}  />:
            null
             }
            
            {this.props.loading === true
            ? null:
            isLoggedIn === false ?
            <Login />:
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
    userID: Object.keys(users),
    users,
    questions,
  }
}

export default connect(mapStateToProps)(App)
