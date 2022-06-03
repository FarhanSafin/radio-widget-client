import { useEffect, useState } from "react";


const useRadios = () => {

    const [radios, setRadios] = useState([]);

    useEffect(()=>{
        fetch('https://radio-widget-1.herokuapp.com/radiolist')
        .then(res => res.json())
        .then(data => setRadios(data));
    }, []);


    return [radios, setRadios];

    }

export default useRadios;