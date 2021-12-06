import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const authID = e.target.value
        const { dispatch } = this.props
        dispatch(setAuthedUser(authID))
    }

    render() {
        const { authUser, user } = this.props
        const { name } = user
        let greeting
        let avatar
        let avatarClass
        if (typeof authUser !== 'undefined' && authUser) {
            greeting = `${user[authUser].name} `
            avatar = `${user[authUser].avatarURL}`
            avatarClass='avatar-small'
            
        } else {
            greeting = 'Guest'
        }
        return (
            <div className='container nav-container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-8'>
                        <ul className='nav-links'>
                            <li>Home</li>
                            <li>New Question</li>
                            <li>Leaderboard</li>
                            
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <ul className='nav-login'>
                            <li>
                                Hello, {greeting}
                                <img 
                                src={avatar} 
                                className={avatarClass}
                                />  
                                <button
                                value=''
                                className='button'
                                onClick={this.handleSubmit}
                                > Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }, { id }) {

    const authUser = authedUser
    const user = users

    return {

        authUser,
        user,
    }
}

export default connect(mapStateToProps)(Nav)