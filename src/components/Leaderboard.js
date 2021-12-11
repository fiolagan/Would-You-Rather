import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {

    state = {
        userTotals: ''
    }
    
    render() {
        return (
            <div>
                <div className="question-list leaderboard">
                <ul>
                    {this.props.userIds.map((id) => (  
                    <LeaderboardCard id={id} key={id} />
                    
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