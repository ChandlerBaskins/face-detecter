import React from 'react';
import './FaceRecognition.css'

const FaceRecogniton = ({imageUrl, box }) => (
    <div className='center ma '>
        <div className= 'absolute mt2 mb3'>
            <img id='inputimage' alt="" width= '500px' height= 'auto' src={imageUrl}></img>
            <div className='bounding-box' style = {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    </div>
);


export default FaceRecogniton;