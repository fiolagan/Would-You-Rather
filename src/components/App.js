import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Nav from './Nav'
import QuestionPage from './QuestionPage'
import Login from './Login'
import QuestionList from './Home'
import authedUser from '../reducers/authedUser'

class App extends Component {

componentDidMount() {
  this.props.dispatch(handleInitialData())
}

render() {

  return (
    <Fragment>
      <LoadingBar />
      <div className="App"> 
      {this.props.loading === true
            ? null:
            <Nav />  }    
            
            {/* {this.props.loading === true
            ? null:
            <QuestionPage match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>  } */}

            {this.props.loading === true
            ? null:
            <QuestionList /> }
            
            {this.props.loading === true
            ? null:
            <Login /> }

      </div>
    </Fragment>
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
