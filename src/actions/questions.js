import { saveQuestion } from '../utils/api'
import { addQuestionToUser } from '../actions/users';
import { showLoading, hideLoading  } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion ({ authUser, qid, answer }) {
    return {
        type: ANSWER_QUESTIONS,
        authUser,
        qid,
        answer
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTIONS,
        question,
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText, 
            optionTwoText, 
            author: authedUser
        })
        .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser(question, authedUser))
        })
        .then(() => dispatch(hideLoading()))  
    }
}




 