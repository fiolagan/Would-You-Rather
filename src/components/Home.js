import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionAnsweredList from './QuestionAnsweredList'
import QuestionUnansweredList from './QuestionUnansweredList'

class Home extends Component {
    state = {
        listType: true,
        classAnswered: 'active',
        classUnanswered: ''
    }
    handleUnansweredClick = () => {
        this.setState({
            listType: true,
            classAnswered: 'active',
            classUnanswered: ''
        })
    }
    handleAnsweredClick = () => {
        this.setState({
            listType: false,
            classUnanswered: 'active',
            classAnswered: ''
        })
    }
    
    render() {
        let questionList
        if (this.state.listType === true) {
            questionList = <QuestionUnansweredList />
        } else {
            questionList = <QuestionAnsweredList />
        }
        return (
            <Fragment>
                <div className={`tab ${this.state.classAnswered}`} onClick={this.handleUnansweredClick}>
                    Unanswered Questions
                </div>
                <div  className={`tab ${this.state.classUnanswered}`} onClick={this.handleAnsweredClick}>
                    Answered Questions
                </div>
                 {questionList} 
            </Fragment>
        )
    }
}



export default connect()(Home)