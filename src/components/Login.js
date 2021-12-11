import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    state = {
        selectedUser: ''
    }

    handleChange = (e) => {
        this.setState({selectedUser:e.target.value});
        
      }

      
    handleSubmit = (e) => {
        e.preventDefault()
        
        const authID = this.state.selectedUser
        const { dispatch } = this.props
        dispatch(setAuthedUser(authID))
    }


    render() { 
        const { user } = this.props
        
        return (
            <div className="tile">
                <div className='tile-title'>
                    <h3>Would You Rather?</h3>
                    <h4>Please sign in to continue.</h4>
                </div>
                <div className='tile-body'>
                    <form  onSubmit={this.handleSubmit}>
                        <select id='userSelect' value={this.state.selectedUser} onChange={this.handleChange} >
                            <option value>Select User</option>
                            {this.props.userIds.map((id) => (
                                <option key={id} value={user[id].id}>{user[id].name}</option>
                            ))}
                        </select> 
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }, props) {
    
    const user = users
    return {
        user,
        userIds: Object.keys(user),
        authedUser
    }
}


export default connect(mapStateToProps)(Login)