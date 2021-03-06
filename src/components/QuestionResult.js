import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uppercaseQuestion } from '../utils/helpers'

class QuestionResult extends Component {
    render() {
        const { authUser, question, id } = this.props
        let questionOneClass
        let questionTwoClass
        const questionOne = question[id].optionOne.text
        const questionTwo = question[id].optionTwo.text
        const questionOneVotes = question[id].optionOne.votes.length
        const questionTwoVotes = question[id].optionTwo.votes.length
        
        const totalVotes = question[id].optionOne.votes.length + question[id].optionTwo.votes.length
        const questionOnePercent = questionOneVotes / totalVotes * 100
        const questionTwoPercent = questionTwoVotes / totalVotes * 100
        if (question[id].optionOne.votes.indexOf(authUser) > -1) {
            questionOneClass = 'voted'
        }

        if (question[id].optionTwo.votes.indexOf(authUser) > -1) {
            questionTwoClass = 'voted'
        }
        return (
             
                <div className='question-block'>
                    <h3>Would you rather...x</h3>
                    <div className={`answer-container ${questionOneClass}`}>
                        <div className='question'>{uppercaseQuestion(questionOne)}</div>
                        <div className='vote-bar-container'>
                            <div 
                                className='vote-bar'
                                style={{"width" : `${questionOnePercent}%`}}
                            >
                                <span>{Math.round(questionOneVotes / totalVotes * 100 * 100) / 100}%</span>
                            </div>
                        </div>
                        <div className='results'><strong>{questionOneVotes} out of {totalVotes} votes</strong></div>
                    </div>
                    <div className={`answer-container ${questionTwoClass}`}>
                    <div className='question'>{uppercaseQuestion(questionTwo)}</div>
                        <div className='vote-bar-container'>
                            <div 
                                className='vote-bar'
                                style={{"width" : `${questionTwoPercent}%`}}
                            >
                                <span>{Math.round(questionTwoVotes / totalVotes * 100 * 100) / 100}%</span>
                            </div>
                        </div>
                        <div className='results'><strong>{questionTwoVotes} out of {totalVotes} votes</strong></div>
                    </div>
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

export default connect(mapStateToProps)(QuestionResult)