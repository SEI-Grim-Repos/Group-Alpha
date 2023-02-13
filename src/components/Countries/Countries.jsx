import { useState, useEffect } from 'react';
import { getPosts } from '../../services/post';

function CountryMap(){
    const [country, setCountry] = useState({})
    
    useEffect(()=> {
        fetchCountries()
    }, [])

    async function fetchCountries() {
        const response = await getPosts()
        //console.log(response.length)
        for (let i = 0; i < response.length; i++){
            setCountry(response[i])
        }
       
    }

    return(
        <>
        {country.location}
        </>
    )
}

export default CountryMap;