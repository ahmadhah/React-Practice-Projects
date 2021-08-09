import React from 'react'

function Loading() {
    return (
        <div>
            <div className="loading spinner-border text-info" style={{ width: '9rem', height: '5rem', marginTop: '45%'}}  role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
