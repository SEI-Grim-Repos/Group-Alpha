import { useState, useEffect } from 'react';
import{ getPosts } from '../../services/post.js';

function CountryMap() {
    const [ countries, setCountries ] = useState("")

    useEffect(() => {
        mapThrough()
    }, [])

    async function mapThrough(){
        const response = await getPosts()
        for (let i = 0; i < response.length; i++){
            setCountries(response[i])
        }
    }

    return (
        <div>
        <p>
        {countries.location}
        </p>
        </div>
    )
}

export default CountryMap;