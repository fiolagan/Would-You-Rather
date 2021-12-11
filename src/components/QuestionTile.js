import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
import QuestionPoll from './QuestionPoll'
import NoPage from './NoPage'

class QuestionTile extends Component {
    render() {
        
        const { authUser, user, question, id } = this.props

        const authorID = question[id].author
        const authorName = user[authorID].name
        const authorAvatar = user[authorID].avatarURL
        return (
                <div className='tile'>
                    <div className='tile-title'><h2>Asked by {authorName}</h2></div>
                    <div className='tile-body'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-4'>
                                <img 
                                    src={authorAvatar}
                                    className='avatar'
                                    alt='Avatar'
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
        question
    }
}

export default connect(mapStateToProps)(QuestionTile)