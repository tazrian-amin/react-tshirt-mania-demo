import React from 'react';

const NotFound = () => {
    return (
        <div className='container'>
            <h1>404: Page Not Found</h1>
            <p>The route you've provided doesn't match with any valid router in the database. Please try again with a valid router.</p>
        </div>
    );
};

export default NotFound;