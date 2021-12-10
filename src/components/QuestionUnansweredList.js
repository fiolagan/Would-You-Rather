import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'


class QuestionUnansweredList extends Component {
    render() {
        const { authUser, question } = this.props
        return (
            <div className="question-list">
                <ul>
                {this.props.questionIds.map((id) => (
                    question[id].optionOne.votes.indexOf(authUser) === -1 && question[id].optionTwo.votes.indexOf(authUser) === -1? 
                        <QuestionCard  id={id} key={id} />:
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

export default connect(mapStateToProps)(QuestionUnansweredList)