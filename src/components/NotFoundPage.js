import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h2>Strona nie znaleziona!</h2>
            <p>
                <Link to='/'>Powrót do strony głównej</Link>
            </p>
        </div>
    );
};

export default NotFoundPage;