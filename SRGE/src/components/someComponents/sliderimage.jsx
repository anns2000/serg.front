import React , {useState,useEffect}from "react";
import './slideimage.css';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';

export default function ImageSlider(){
    const images= [one , two , three , four];
    const [currentIndex , setCurrentIndex] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            goToNext()
        },5000)
        return ()=>clearTimeout(timer)
    },[currentIndex])
    const leftArrow={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '30px',
        color: '#eee',
        zIndex: 1,
        cursor: 'pointer',
        fontWeight: 'bold',
    }
    const rightArrow={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '30px',
        color: '#eee',
        zIndex: 1,
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: '0.7s ease-in'

    }
    const dotsStyle={
        color: '#BDA175',
        fontSize: '60px',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '2',
        position: 'absolute',
        bottom: '2%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        cursor: 'pointer',
    }
    const dots={
        padding: '0 8px',
    }
    const goToPrevious=()=>{
        const isFirst = currentIndex === 0;
        const newIndex= isFirst? images.length-1: currentIndex-1;
        setCurrentIndex(newIndex);
    }
    const goToNext=()=>{
        const isLast = currentIndex === images.length-1;
        const newIndex= isLast? 0: currentIndex+1;
        setCurrentIndex(newIndex);
    }
    const goToSlide=(index)=>{
        setCurrentIndex(index);
    }
   
    return(
        <div className="slider" style={{backgroundImage:`url('${images[currentIndex]}')`}}>
            <div className="slides">
                <div style={leftArrow} onClick={goToPrevious}>{'❮'}</div>
                <div style={rightArrow} onClick={goToNext}>{'❯'}</div>
                <div className="slide" ></div>
                <div  style={dotsStyle}>
                    {
                        images.map((slide , index)=>{
                            return(
                                <div key={index} style={dots}  onClick={()=>goToSlide(index)}>{index === currentIndex? '•':'◦'}</div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="home">
                <p className="title">Welcome To SRGE</p>
                <p>Egyptian team for scientific research</p>
                <a href='#page'>Get Started</a>
            </div>
        </div>
        
    )
}