import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsAnswered from './QuestionsAnswered'
import QuestionsUnanswered from './QuestionsUnanswered'

class Home extends Component {
    render() {
        
        return (
            <div>
                <QuestionsAnswered />
            </div>
        )
    }
}



export default connect()(Home)