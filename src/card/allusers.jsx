import React, {useEffect, useState} from 'react';
import Data from "../react-router/data users/data";
import Card from "./index";

function AllUsers(props) {

    const [card, setCard] = useState([]);
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        Data.getStars().then(response => {
            setCard(response.data)
            setFlag(false);
        }).catch(error => console.log(error))
    }, [])


    return (
        <div className='container'>
            {flag ? <div> Loading in Progress </div> :
                <div>
                    {card.map(user => {
                        return <Card key={user.id} {...user}/>
                    })}
                </div>}
        </div>
    );
}

export default AllUsers;