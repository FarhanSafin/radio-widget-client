import React from 'react';
import useRadios from '../../hooks/useRadios';
import './Home.css';

const Home = () => {
    const [radios] = useRadios();

    const handleClick = radio => {
        console.log('clicked', radio.name)
        document.getElementById('playing').innerHTML = `${radio.name}`;
    }

    return (
        <div>
            {
                radios.map(radio => <div key={radio._id}>
                    <button onClick={() => handleClick(radio)} className='link'>{radio.name}</button>
                    <h2>{radio.frequency}</h2>
                </div>)
          }
          <h2>Currently Playing: <span id='playing'/></h2>
        </div>
    );
};

export default Home;