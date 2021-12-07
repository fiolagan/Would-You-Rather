import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
    render() {
        const { authUser, user, question, author, match, id } = this.props
        const authorID = user[question[id].author]
        const authorName = user[question[id].author].name
        const authorAvatar = user[question[id].author].avatarURL
        console.log(user[question[id].author])
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
                                    <div className='col-8'>
                                        <h3>Results</h3>
                                        
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

export default connect(mapStateToProps)(QuestionAnswered)