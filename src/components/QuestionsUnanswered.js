import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionsUnanswered extends Component {
    render() {
        const { authUser, user, question, author, match } = this.props
        console.log(this.props)
        return (
            <div>
                <h3>Unanswered Questions</h3>
                <ul>
                {this.props.questionIds.map((id) => (
                    question[id].optionOne.votes.indexOf(authUser) === -1 && question[id].optionTwo.votes.indexOf(authUser) === -1? 
                        <li key={id}>
                            <div>question author: {user[question[id].author].name}</div>
                            <div>answered: {question[id].optionOne.votes} {question[id].optionTwo.votes}</div>
                            <div>question id: {id}</div>
                            <div>authed user: {authUser}</div>
                            <hr></hr>
                        </li>:
                        null
                    ))}
                    
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, { id  }) {
    const authUser = authedUser
    const user = users
    const question = questions

    return {
        authUser,
        user,
        question,
        questionIds: Object.keys(questions)
            .sort((a,b) => question[b].timestamp - question[a].timestamp),
    }
}

export default connect(mapStateToProps)(QuestionsUnanswered)