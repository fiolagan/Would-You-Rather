import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
import QuestionPoll from './QuestionPoll'

class QuestionPage extends Component {
    render() {
        const { authUser, user, question, id, author, match } = this.props
        const authorID = question[id].author
        const authorName = user[authorID].name
        const authorAvatar = user[authorID].avatarURL
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

                                    {question[id].optionOne.votes.indexOf(authUser) !== -1 || question[id].optionTwo.votes.indexOf(authUser) !== -1? 
                                    <QuestionResult id={id} key={id} />:
                                    <QuestionPoll id={id} key={id} />}
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
        id,
        authUser,
        user,
        question,
         
    }
}

export default connect(mapStateToProps)(QuestionPage)