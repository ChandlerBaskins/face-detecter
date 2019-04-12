import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => (
    <div>
        <p className='f3'>
            {'This magic brain will detect faces and your pictures'}
        </p>

        <div className='center pb4 mb4'>
            <div className=' form center pa4 br3 shadow-5'>
                <input type='text' className='f4 pa2 w-70 center' placeholder='search urls'></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    </div>
);


export default ImageLinkForm;