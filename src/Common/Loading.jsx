import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center mt-10"><span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span></div>
    );
};

export default Loading;