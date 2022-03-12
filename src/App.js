import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function App () {
    const api = "https://randomuser.me/api/";
    const [stire, setStire] = useState([]);
    const [map, setMap] = useState();

    const generateuser = () => {
        axios(api)
            .then(res => {
                console.log(res.data.results[0])
                setStire(res.data.results)
            });
    };

    useEffect(() => {
        generateuser();
    }, []);

    useEffect(() => {
        setMap(stire.map((stire1, key) => {
            return <div key={key} className={ stire1.gender }>
                <img src={stire1.picture.large} />
                <h1>{ `${stire1.name.first} ${stire1.name.last}` }</h1>
                <p>{ stire1.email }</p>
            </div>
        }));
    }, [stire]);

    return (
        <>
            { map }
            <input type="button" onClick={generateuser} value="Generate User" />
        </>
    )
}

export default App;