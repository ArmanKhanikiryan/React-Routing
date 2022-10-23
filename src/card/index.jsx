import React from 'react';
import '../App.css';
import {useNavigate, useParams} from "react-router-dom";

function Card({imageUrl, name, surname, id}) {
    const navigate = useNavigate();

    const handleImageBtn = (id) => {
        navigate(`./${id}`)
    }

    return (
        <div className='container'>
            <div className='card'>
                <img onClick={()=> handleImageBtn(id)} className='images' src={imageUrl} alt=""/>
                <p> {name} </p>
                <p> {surname} </p>
            </div>
        </div>
    );
}

export default Card;

