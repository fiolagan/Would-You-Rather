import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const authID = e.target.value
        const { dispatch } = this.props
        dispatch(setAuthedUser(authID))
    }

    render() {
        const { authUser, user } = this.props
 
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
            <div className='container-fluid nav-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8'>
                            <ul className='nav-links'>
                        
                            
                                <li><NavLink to='/' exact className='tab' activeClassName='active'>Home</NavLink  ></li>
                                <li><NavLink to='/add' exact className='tab' activeClassName='active'>New Question</NavLink  ></li>
                                <li><NavLink to='/leaderboard' exact className='tab' activeClassName='active'>Leaderboard</NavLink  ></li>
                            
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <ul className='nav-login'>
                                <li>
                                    Hello, {greeting}
                                    
                                    {authUser !== '' ?
                                    <div><img 
                                    src={avatar} 
                                    className={avatarClass}
                                    alt='Avatar'
                                    /> 
                                    <button
                                    value=''
                                    className='button'
                                    onClick={this.handleSubmit}
                                    > Log Out
                                    </button>
                                    </div>:
                                    null}
                                </li>
                            </ul>
                        </div>
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