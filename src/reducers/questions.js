import { RECEIVE_QUESTIONS, ANSWER_QUESTIONS, ADD_QUESTIONS } from "../actions/questions";

export default function questions (state = {}, action ) {
    const { authUser, qid, answer } = action;
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
                
        case ANSWER_QUESTIONS :
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authUser])
                    }
                }
            }
        case ADD_QUESTIONS :
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default :
            return state
    }
}
