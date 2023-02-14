import { useState, useEffect } from 'react';
import{ getPosts } from '../../services/post.js';

function CountryMap() {
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        async function mapThrough(){
            const response = await getPosts()
                setCountries(response)
        }
         mapThrough()
    }, [])

   

    return (
        <div>
       {countries.map((country) => (<p>{country.location}</p>))}
        </div>
    )
}

export default CountryMap;