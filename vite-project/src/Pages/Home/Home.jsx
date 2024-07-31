import Navbar from '../../components/Navbar'
import React, {useEffect, useState} from 'react'
import './Home.css'
import { Button } from '@mui/material';

function Home(){
    const [isVisible, setIsVisible] = useState(true)
    const [time, setTime] = useState(getFormatedTime())
    const [color, setColor] = useState('#1b182c')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };
  
  const changeColor = () => {
    const colors = ['#1b182c','#450A80', '#162E2E', '##962E2E', '#A4D65E', '#F391BB', '#008282', '#450e00', '#450e86']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }

  const buttonClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const Name = () => {
    setName(event.target.value)
  }

  function getFormatedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}


  useEffect(() => {
    const refreshTime = () => {
        setTime(getFormatedTime)
    }

    const intervalId = setInterval(refreshTime, 1000);

    return () => clearInterval(intervalId);
  }, [])

    return(
        <>
        <Navbar/>
        <body style={{ backgroundColor: color }}>
            <div className='container' >
                <div className='DivButtons' >
                    <p className='HourText'>{time}</p>
                    {isVisible && <p className='HiddenText'>Texto escondido.</p>}
                    <Button className="Button" variant="contained" onClick={toggleVisibility}>
                        {isVisible ? 'Esconder' : 'Mostrar'} Texto
                    </Button>
                    <Button className="Button" variant="contained" onClick={changeColor}>Mudar cor</Button>
                    <Button className="Button" variant="contained" onClick={buttonClick}>Clique aqui</Button>
                </div>
                <div className='clickCounter'>
                    <p>Clicks: {count}</p>
                </div>
                <input type="text"
                    placeholder='Digite seu nome'
                    value={name}
                    onChange={Name}
                    style={{marginBottom: '10px', padding: '5px', marginLeft: '30px'}}
                     />
                <div className='divMessage'>
                    {name && <p>Bem-vindo, {name}</p>}
                </div>
            </div>
        </body>
        </>
    )
}

export default Home;