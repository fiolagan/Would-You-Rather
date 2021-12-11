import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'


class QuestionNew extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }
    
    
    handleChange = (event) => {
        this.setState(() => ({
            [event.target.id]: event.target.value
        }))
    }

      handleSubmit = (e) =>  {
        const { dispatch, id, authUser } = this.props
        e.preventDefault()  

        dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText, authUser))


        

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: id ? false : true,
        }))
      }

    render() {
        const { toHome } = this.state
        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className='tile'>
                        <div className='tile-title'><h2>Add a new question</h2></div>
                            <div className='tile-body'>
                                <h4>Would you rather...</h4>
                                <div>
                                    <input type='text' id='optionOneText' placeholder='Enter Option One Text Here' onChange={this.handleChange} ></input>
                                </div>
                                <div>
                                    or
                                </div>
                                <div>
                                    <input type='text' id='optionTwoText' placeholder='Enter Option Two Text Here' onChange={this.handleChange} ></input>
                                </div>
                                <div>
                                    <button disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}>Submit</button>
                                </div>
                            </div>
                    </div>
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
        authedUser,
        authUser,
        user,
        question
    }
}

export default connect(mapStateToProps)(QuestionNew)