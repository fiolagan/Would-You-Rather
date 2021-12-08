import { RECEIVE_QUESTIONS, ANSWER_QUESTIONS, ADD_ANSWER_TO_USER } from "../actions/questions";

export default function questions (state = {}, action ) {
    const { authUser, qid, answer } = action;
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }

        case ADD_ANSWER_TO_USER:
       
                return {
                    ...state,
                    [authUser]: {
                    ...state[authUser],
                    [qid]: {
                        ...state[qid],
                        answers: [qid]
                    }
                    }
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
            

        default :
            return state
    }
}
