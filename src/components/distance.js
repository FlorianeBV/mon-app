import config from '../config';
import React, { useEffect, useState } from 'react';

const Distance = () => {

    const [dist, setDist] = useState(0);

    /*componentDidMount = () => {
        this.getDistance()
    }*/
    useEffect(() => {
        setInterval(()=> {
            fetch(config.endpoints.distance.read, {
                Accept: 'application/json',
                headers: {
                    'appKey': '65f897f0-3315-4e4b-ae5e-b0107a5b0f14',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(response => response.json())
                .then(data => {
                    data.rows.forEach(d => {
                        console.log(d.LIGHT_DIST)
                        setDist(prevDist => d.LIGHT_DIST)
                    })
                })
        }, 1000);
    }, []);

    return <h1>La distance vaut : {dist}</h1>
}


export default Distance;