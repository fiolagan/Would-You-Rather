import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
    render() {
        const { authUser, user, question, id, author, match } = this.props
        const questionID = question[id]
        const authorID = question[id].author
        const authorName = user[authorID].name
        const authorAvatar = user[authorID].avatarURL
        console.log("Q1 ", question[id])
        let questionOneClass
        let questionTwoClass
        const questionOne = question[id].optionOne.text
        const questionTwo = question[id].optionTwo.text
        const questionMark = '?'
        function formatQuestion(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).concat(questionMark);
          }
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
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='question-container'>
                            <div className='question-title'>Asked by {authorName}</div>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-4'>
                                    <img 
                                        src={authorAvatar}
                                        className='avatar'
                                        /> 
                                    </div>
                                    <div className='col-8'>
                                        <h3>Results</h3>
                                        <div className={`answer-container ${questionOneClass}`}>
                                            <div className='question'>{formatQuestion(questionOne)}</div>
                                            <div className='vote-bar-container'>
                                                <div 
                                                    className='vote-bar'
                                                    style={{"width" : `${questionOnePercent}%`}}
                                                >
                                                    <span>{questionOneVotes / totalVotes * 100}%</span>
                                                </div>
                                            </div>
                                            <div className='results'><strong>{questionOneVotes} out of {totalVotes} votes</strong></div>
                                        </div>
                                        <div className={`answer-container ${questionTwoClass}`}>
                                        <div className='question'>{formatQuestion(questionTwo)}</div>
                                            <div className='vote-bar-container'>
                                                <div 
                                                    className='vote-bar'
                                                    style={{"width" : `${questionTwoPercent}%`}}
                                                >
                                                    <span>{questionTwoVotes / totalVotes * 100}%</span>
                                                </div>
                                            </div>
                                            <div className='results'><strong>{questionTwoVotes} out of {totalVotes} votes</strong></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                             
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    const authUser = authedUser
    const user = users
    const question = questions

    return {
        authUser,
        user,
        question,
        id, 
    }
}

export default connect(mapStateToProps)(QuestionList)