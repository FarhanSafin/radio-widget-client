import React from 'react';
import useRadios from '../../hooks/useRadios';
import './Home.css'

const Home = () => {
    const [radios] = useRadios();
    return (
        <div>
            <h2 className='text'>this is home</h2>
            {
                radios.map(radio => <div key={radio._id}>
                    <button className='link'>{radio.name}</button>
                    <h2>{radio.frequency}</h2>
                </div>)
          }
        </div>
    );
};

export default Home;