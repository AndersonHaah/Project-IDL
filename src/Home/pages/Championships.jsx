import React from "react";
import CebolaoImage from './img/cebolao-img.png'
import KingslendasImage from './img/kings-lendas-img.png'

import './style/Championships.css'

export default props => 
    <div className="container-championships">
        <div className="cebolao">
            <img src={CebolaoImage} alt="imagem cebolao" />
        </div>
        <div className="kings-lendas">
            <img src={KingslendasImage} alt="imagem kingslendas" />
        </div>
    </div>