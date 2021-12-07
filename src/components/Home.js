import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionAnsweredList from './QuestionAnsweredList'
import QuestionUnansweredList from './QuestionUnansweredList'
import { NavLink } from 'react-router-dom'

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
            <div>
                <div className={`tab ${this.state.classAnswered}`} onClick={this.handleUnansweredClick}>
                    Unanswered Questions
                </div>
                <div  className={`tab ${this.state.classUnanswered}`} onClick={this.handleAnsweredClick}>
                    Answered Questions
                </div>
                 {questionList}
                
            </div>
        )
    }
}



export default connect()(Home)