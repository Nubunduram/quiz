import React from 'react';

function FilterQuiz({ setCategory }) {
    return (
        <>
            <label>
                <i className="fas fa-filter"></i> Filtrer par catégorie :
            </label>
            <select className='form-select' onChange={(e) => setCategory(e.target.value)}>
                <option value="All">Toutes</option>
                <option value="Math">Maths</option>
                <option value="Science">Sciences</option>
                <option value="Histoire">Histoire</option>
            </select>
        </>
    );
}

export default FilterQuiz;
