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

    function checkUnique(){
        countries.filter((element, index) =>{
            return countries.indexOf(element) === index;
        })
    }
   

    return (
        <div>
       {countries.map.filter(checkUnique)((country) => (<p>{country.location}</p>))}
        </div>
    )
}

export default CountryMap;