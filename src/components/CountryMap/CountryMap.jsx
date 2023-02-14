import { useState, useEffect } from 'react';
import{ getPosts } from '../../services/post.js';

function CountryMap() {
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        async function getAllCountries(){
            const response = await getPosts()
            setCountries(response)
        }
         getAllCountries()

    }, [])

    return (
        <div>
       {countries.map((country) => (<p>{country.location}</p>))}
        </div>
    )
}

export default CountryMap;