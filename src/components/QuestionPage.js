import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResult from './QuestionResult'
import QuestionPoll from './QuestionPoll'
import NoPage from './NoPage'

class QuestionPage extends Component {
    render() {
        
        const { authUser, user, question, id, checkQuestionExists } = this.props

        if (checkQuestionExists === null) {
			return <NoPage authUser={authUser}/>
		}

        const authorID = question[id].author
        const authorName = user[authorID].name
        const authorAvatar = user[authorID].avatarURL
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
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
                    </div>
                </div>               
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    
    const { id } = props.match.params
    const authUser = authedUser
    const checkQuestionExists = questions[id]
    
    const user = users
    const question = questions

    return {
        id,
        authUser,
        user,
        question,
        checkQuestionExists: checkQuestionExists ? checkQuestionExists : null
    }
}

export default connect(mapStateToProps)(QuestionPage)