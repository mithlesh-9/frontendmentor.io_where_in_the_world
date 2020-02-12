import React from 'react';
import './loadingorerrors.scss';


const LoadingOrErrors = ({isLoading,errors,darkmode}) => {
    return (
        <div className={`main ${darkmode ? 'darkmode' : ''}`}>
        <div className="loading">
        {
            isLoading
            ? (

                <div className="circle"></div>

            )
            : errors
            ? (<span className={`${darkmode ? 'darkmode' : 'normalmode'}`}>Something went wrong.<br/> Please try again later.</span>)
            : ''
        }
        
        </div>
        </div>
    )
}


export default LoadingOrErrors;