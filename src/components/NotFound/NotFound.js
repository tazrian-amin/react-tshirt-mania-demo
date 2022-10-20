import React from 'react';

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center min-vh-100 bg-info bg-gradient'>
            <div className='text-center text-white border border-3 border-dark rounded bg-danger bg-gradient p-2 m-4'>
                <h1>404: Page Not Found</h1>
                <p>The route you've provided doesn't match with any valid router in the database. Please try again with a valid router.</p>
            </div>
        </div>
    );
};

export default NotFound;