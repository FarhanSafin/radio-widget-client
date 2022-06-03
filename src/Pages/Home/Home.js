import React from 'react';
import useRadios from '../../hooks/useRadios';
import back from '../../assets/images/back-arrow.png'
import power from '../../assets/images/switch.png'
import loading from '../../assets/images/loading.svg'
import HomeCSS from './Home.module.css';

const Home = () => {
    const [radios] = useRadios();

    const handleClick = radio => {
        document.getElementById('playing').innerHTML = `<span>Currently Playing:</span><br>${radio?.name}`;
    }

    if(radios.length === 0){
        return <div className={HomeCSS.loading}><img src={loading} alt="" /></div>
    }
    else{
        return (
            <div>
                <div className={HomeCSS.card}>
                    <div className={HomeCSS.head}>
                        <div>
                            <button className={HomeCSS.headbutton}><img className={HomeCSS.back} src={back} alt=''/></button>
                            <span className={HomeCSS.headingtitle}>STATIONS</span>
                            <button className={HomeCSS.headbutton}><img className={HomeCSS.power} src={power} alt=''/></button>
                        </div>
                    </div>
    
                        {
                            radios.map(radio => <div id='clicked' key={radio._id}>
                            <div onClick={() => handleClick(radio)} className={HomeCSS.data}>
                                <h3  className={HomeCSS.name}>{radio.name}</h3>
                                <h3 className={HomeCSS.freq}>{radio.frequency}</h3>
                            </div>
                            <hr className={HomeCSS.line}/>
                            </div>
                            )
                    }
    
                    <div className={HomeCSS.playing} id='playing'/>
                </div>
            </div>
        );
    }

    
};

export default Home;