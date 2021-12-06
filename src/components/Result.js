import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const { user } = this.props
        console.log("Props: ", user)

        const { name, avatarURL, id } = user
        return (
            <div>
                <img 
                src={avatarURL}
                className='avatar'
                />               
                {name}
            </div>
        )
    }
}

function mapStateToProps ({users}, { id }) {
    const user = users[id]

    return {
        user
    }
}

export default connect(mapStateToProps)(Result)