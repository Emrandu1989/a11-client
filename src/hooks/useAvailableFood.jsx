import { useEffect, useState } from 'react';

const useAvailableFood = () => {
    const [availableFoods, setAvailableFoods] = useState([]);
    console.log(availableFoods)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/foods`)
        .then(res=>res.json())
        .then(data=>setAvailableFoods(data))
    }
    ,[])
    return [availableFoods, setAvailableFoods]
};

export default useAvailableFood;