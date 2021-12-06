import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const authID = e.target.value
        const { dispatch } = this.props
        dispatch(setAuthedUser(authID))
    }


    render() {
        return (
            <div>
                <form>
                <button
                value='sarahedo'
                className='button'
                onClick={this.handleSubmit}
                > Sarah 
                </button>

                <button
                value='tylermcginnis'
                className='button'
                onClick={this.handleSubmit}
                > Tyler
                </button>

                <button
                value='johndoe'
                className='button'
                onClick={this.handleSubmit}
                > John
                </button>
                
                </form>
            </div>
        )
    }
}


export default connect()(Login)