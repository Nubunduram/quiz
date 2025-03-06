import React, { useState } from 'react';
import FilterQuiz from './components/FilterQuiz';
import QuizAccordion from './components/QuizAccordion';
import { Container } from 'react-bootstrap';

function App() {
    const [category, setCategory] = useState('All');

    return (
        <Container className="my-4 d-flex flex-column gap-2">
            <h1 className="text-center">Quiz Interactif</h1>
            <FilterQuiz setCategory={setCategory} />
            <QuizAccordion category={category} />
        </Container>
    );
}

export default App;
