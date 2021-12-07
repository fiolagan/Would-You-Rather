import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'

class QuestionCard extends Component {
    state = {
        pollText: ''
    }
    render() {
        const { authUser, user, question, author, match, id } = this.props
        const authorID = user[question[id].author]
        const authorName = user[question[id].author].name
        const authorAvatar = user[question[id].author].avatarURL

        let pollText
        if (question[id].optionOne.votes.indexOf(authUser) !== -1 || question[id].optionTwo.votes.indexOf(authUser) !== -1) {
            pollText = 'View Poll'
        } else {
            pollText = 'Take Poll'
        }
        return (
             
                        <li key={id}>
                            <div className='question-container'>
                            <div className='question-title'>{authorName} asks:</div>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-4'>
                                    <img 
                                        src={authorAvatar}
                                        className='avatar'
                                        /> 
                                    </div>
                                    <div className='col-8 question-block'>
                                        <h3>Would You Rather?</h3>
                                        <h4>{formatQuestion(question[id].optionOne.text)} or {formatQuestion(question[id].optionTwo.text)}</h4>
                                        <Link to={`/questions/${id}`} key={id}><button>{pollText}</button></Link>
                                    </div>
                                </div>

                            </div>
                             
                        </div>
                        </li>
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

export default connect(mapStateToProps)(QuestionCard)