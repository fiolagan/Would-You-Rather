import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoPage extends Component {

    render() {

        const { authUser } = this.props

        return (
            <div>
                <h1>404</h1>
                <h2>Sorry this question doesn't exist. Check the URL.</h2>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }, props) {
    
    const authUser = authedUser

    return {
        authUser,
    }
}

export default connect(mapStateToProps)(NoPage)