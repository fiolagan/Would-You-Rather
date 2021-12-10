import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {

    state = {
        userTotals: ''
    }

    render() {
        const { user } = this.props

        return (
             
                  <div>
                      <h3>Leaderboard</h3>
                      <div className="question-list">
                      <ul>
                      {this.props.userIds.map((id) => (
                          
                        <li key={id}>
                            <div className='question-container'>
                                <div>{user[id].name}</div>
                                <div>Qs answered: {Object.keys(user[id].answers).length}</div>
                                <div>Qs asked: {user[id].questions.length}</div>
                                <div>Total: {Object.keys(user[id].answers).length + user[id].questions.length}</div>
                            </div>
                      </li>
                    ))}
                    </ul>
                    </div>
                  </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const authUser = authedUser
    const user = users
    const question = questions

    return {
        authUser,
        user,
        question,
        userIds: Object.keys(users)
        .sort((a,b) => ((users[b].questions).length  + Object.keys(users[b].answers).length) - ((users[a].questions).length + Object.keys(users[a].answers).length)),
    }
}

export default connect(mapStateToProps)(Leaderboard)