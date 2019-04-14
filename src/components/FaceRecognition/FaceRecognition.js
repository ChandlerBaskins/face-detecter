import React from 'react';

const FaceRecogniton = ({imageUrl}) => (
    <div className='center ma '>
        <div className= 'absolute mt2 mb3'>
            <img alt="" width= '500px' height= 'auto' src={imageUrl}></img>
        </div>
    </div>
);


export default FaceRecogniton;