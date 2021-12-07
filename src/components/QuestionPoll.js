import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import { _saveQuestionAnswer } from '../utils/_DATA'


class QuestionPoll extends Component {

    handleChange(event) {
        console.log(event.target.value);
      }

      
      handleSubmit(e) {

        e.preventDefault()
        
          const { authUser, id } = this.props
        _saveQuestionAnswer ({ authUser, id })
      }

      

    render() {
        const { authUser, user, question, id, author, match } = this.props
        const authorID = question[id].author
        const questionOne = question[id].optionOne.text
        const questionTwo = question[id].optionTwo.text

        return (
             
                <div className='question-block'>
                    <h3>Would You Rather ...</h3>
                    <form className='question-form' onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <div><input type="radio" value={formatQuestion(questionOne)} name="answer" /> {formatQuestion(questionOne)}</div>
                        <div><input type="radio" value={formatQuestion(questionTwo)} name="answer" /> {formatQuestion(questionTwo)}</div>
                        <button>Submit</button>
                    </form>
                </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, { id  }) {
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