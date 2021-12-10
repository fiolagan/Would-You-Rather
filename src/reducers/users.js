import { RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from "../actions/users";

export default function user (state = {}, action) {
    const { authUser, qid, answer } = action;
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER_TO_USER:
            
                return {
                    
                    ...state,
                [authUser]: {
                  ...state[authUser],
                  answers: {
                    ...state[authUser].answers,
                    [qid]: answer
                  }
                }
            }
        case ADD_QUESTION_TO_USER :
                const { question } = action
                return {
                    ...state,
                    [authUser]: {
                        ...state[authUser],
                        questions: state[authUser].questions.concat([question.id])
                      }
                }
        default :
            return state
    }
}