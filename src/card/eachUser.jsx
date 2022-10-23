import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Data from "../react-router/data users/data";
import '../App.css';




function EachUser(props) {
    const [eachUser, setEachUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isRefresh, setIsRefresh] = useState(true);
    const parameter = useParams();
    const id = +(parameter.id)

    const GetInfo = useCallback((id) => {
        Data.getStar(id).then(response=>{
            setEachUser(response.data)
        }).catch(error=>{
            console.log(error);
        }).finally( () => setIsLoading(false))
    }, [isLoading]);


    useEffect(() => {
        GetInfo(id)
    }, [])

    const handleRefreshBtn = () => {
        GetInfo(id)
        setIsLoading(true)
    }


    return (
        <div>
            {isLoading ? <p> Loading in Process </p> :
                <div className='eachComponent'>
                    {eachUser ? <div>
                            <img className='eachImage' src={eachUser.imageUrl} alt=""/>
                            <p className='paragraph'>{eachUser.name} {eachUser.surname} </p>
                            <p className='paragraph'> {eachUser.additionalInfo.biography} </p>
                        </div> :
                        <button onClick={handleRefreshBtn} type="submit"> Refresh </button>
                    }
                </div>
            }
        </div>
    );
}

export default EachUser;