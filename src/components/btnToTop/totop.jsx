import React ,{useEffect , useState}from "react";
import './totop.css';
export default function Top(){
    const [toTop , setToTop] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            if(window.scrollY > 150){
                setToTop(true);
            }else{
                setToTop(false);
            }
        })
    },[]);
    const totop=()=>{
        window.scrollTo(0 , 0);
    }
    return(
        <>
        {
            toTop &&(<button id='top' onClick={totop}>⬆</button>)
        }
        </>
    );
}