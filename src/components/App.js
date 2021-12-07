import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import QuestionPage from './QuestionPage'
import Login from './Login'
import Home from './Home'

class App extends Component {

componentDidMount() {
  this.props.dispatch(handleInitialData())
}

render() {
  const { authedUser } = this.props
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
            <Route path='/questions/:id' component={QuestionPage} />  }

            {this.props.loading === true
            ? null:
            <Route path='/' exact component={Home} />
             }
            
            {this.props.loading === true
            ? null:
            <Login /> }

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
