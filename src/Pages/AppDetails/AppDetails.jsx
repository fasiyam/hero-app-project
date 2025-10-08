import React from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {

    const appId = useParams()
    console.log(appId);
    return (
        <div>
            
        </div>
    );
};

export default AppDetails;