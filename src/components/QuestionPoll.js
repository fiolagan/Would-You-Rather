import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import { answerQuestion } from '../actions/questions'
import { addAnswerToUser } from '../actions/questions';


class QuestionPoll extends Component {

    state = {
        selectedAnswer: ''
    }

    handleChange = (event) => {
        this.setState(() => ({
            selectedAnswer: event.target.value
        }))
    }
    
      handleSubmit = (e) =>  {
        e.preventDefault()  
        
        const { dispatch, id, authUser } = this.props
        dispatch(answerQuestion({
            authedUser: authUser,
            qid: id,
            answer: this.state.selectedAnswer
        }))
        
        dispatch(addAnswerToUser({
            authedUser: authUser,
            qid: id,
            answer: this.state.selectedAnswer
        }))
      }
      
      

    render() {
        const { authUser, user, question, id, author, match } = this.props
        const authorID = question[id].author
        const questionOne = question[id].optionOne.text
        const questionTwo = question[id].optionTwo.text
        console.log(Object.keys(user[authUser].answers).length)
        
        
        return (
             
                <div className='question-block'>
                    <h3>Would You Rather ...</h3>
                    <form className='question-form' onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <div><input type="radio" value='optionOne' name="answer" /> {formatQuestion(questionOne)}</div>
                        <div><input type="radio" value='optionTwo' name="answer" /> {formatQuestion(questionTwo)}</div>
                        <button
                        disabled={this.state.selectedAnswer === ''}
                        >Submit</button>
                    </form>
                </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
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

export default connect(mapStateToProps)(QuestionPoll)