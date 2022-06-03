import { useEffect, useState } from "react";


const useRadios = () => {

    const [radios, setRadios] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/radiolist')
        .then(res => res.json())
        .then(data => setRadios(data));
    }, []);


    return [radios, setRadios];

    }

export default useRadios;