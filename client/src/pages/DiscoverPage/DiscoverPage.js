import React from 'react';
import './DiscoverPage.css';
import {changeElementClass} from '../../helpers';

const DiscoverPage = () => {

    const handleClick = (event) => {
        changeElementClass(event.target.id, '.option-button', 'selected-option');
    }

    return (
        <div id="discover-content">
            <div id="artist-options">
                <div id="artist-1" className="option-button selected-option" onClick={handleClick}>Illenium</div>
                <div id="artist-2" className="option-button" onClick={handleClick}>Alan Walker</div>
                <div id="artist-3" className="option-button" onClick={handleClick}>Kygo</div>
                <div id="artist-4" className="option-button" onClick={handleClick}>Galantis</div>
                <div id="artist-5" className="option-button" onClick={handleClick}>KSMR</div>
            </div>
        </div>
    )

}

export default DiscoverPage;