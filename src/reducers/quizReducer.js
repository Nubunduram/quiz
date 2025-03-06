const quizReducer = (state, action) => {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return {
                ...state,
                questions: state.questions.map(question =>
                    question.id === action.payload.id && question.correct === null
                        ? { ...question, correct: action.payload.isCorrect }
                        : question
                )
            };
        default:
            return state;
    }
};

export default quizReducer;