import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderboardCard extends Component {

    render() {
        const { user, id } = this.props
        const authorName = user[id].name
        const authorAvatar = user[id].avatarURL

        return (
             
            <li key={id}>
                <div className='tile'>
                    <div className='tile-title'><h2>{authorName}</h2></div>
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
                                <div className='col-8 question-block'>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <div>Questions answered <span>{Object.keys(user[id].answers).length}</span></div>
                                                <div>Questions asked <span>{user[id].questions.length}</span></div>
                                            </div>
                                            <div className='col-3'>
                                                <div>Total 
                                                    <span>{Object.keys(user[id].answers).length + user[id].questions.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps)(LeaderboardCard)