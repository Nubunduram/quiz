import React, { createContext, useReducer } from 'react';
import quizReducer from '../reducers/quizReducer';

const initialState = {
    questions: [
        // Histoire
        { id: 1, text: "Quel événement a marqué la fin du Moyen Âge en Europe ?", answer: "La prise de Constantinople en 1453", category: "Histoire", answered: false, correct: null },
        { id: 2, text: "Qui a été le premier président des États-Unis ?", answer: "George Washington", category: "Histoire", answered: false, correct: null },
        { id: 3, text: "En quelle année a eu lieu la chute du mur de Berlin ?", answer: "1989", category: "Histoire", answered: false, correct: null },

        // Math
        { id: 4, text: "Quel est le résultat de 15 × 8 ?", answer: "120", category: "Math", answered: false, correct: null },
        { id: 5, text: "Si un triangle a des angles de 60° et 50°, quel est le troisième angle ?", answer: "70°", category: "Math", answered: false, correct: null },
        { id: 6, text: "Quel est le carré de 12 ?", answer: "144", category: "Math", answered: false, correct: null },

        // Science
        { id: 7, text: "Quel est l'élément chimique dont le symbole est 'O' ?", answer: "L'oxygène", category: "Science", answered: false, correct: null },
        { id: 8, text: "Combien de planètes composent le système solaire ?", answer: "8", category: "Science", answered: false, correct: null },
        { id: 9, text: "Quelle est la planète la plus proche du Soleil ?", answer: "Mercure", category: "Science", answered: false, correct: null }
    ]
};

export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
}
