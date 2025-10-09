import React from 'react';
import { useParams } from 'react-router';

const Installation = () => {

    const appToInstall = useParams()
    console.log(appToInstall)

    return (
        <div>
            <h1>Installation page</h1>
        </div>
    );
};

export default Installation;