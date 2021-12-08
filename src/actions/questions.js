export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'

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

export function addAnswerToUser(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authUser,
      qid,
      answer
    };
  }

 