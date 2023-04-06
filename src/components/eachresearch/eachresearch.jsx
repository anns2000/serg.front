import React ,{useState , useEffect}from "react";
import { useParams } from "react-router-dom";
import './research.css';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Research(){
    window.scrollTo(0 , 0)
    const params = useParams();
    let id = (params.id).replace(/\D/g , "");
    var text = /[,.]+/;
    const [research , setResearch] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/d14e77e5-7d6c-4794-9cae-e706d57eb324')
        .then((res)=>res.json())
        .then((res)=>{
            setResearch(res[id-0]??res[0]);
    });},[]);
    let t = (research.authors) ??"Error";
    let allAuthors = t.split(text);
    let desc = (research.description)??"No Description";
    desc = desc.split(text);
    return(
        <div className="one-research">
            <h2>{research.title}</h2>
            <p className = 'header'>Description</p>
            {
                desc.map((txt , index)=>{
                    return(<p key={index} style={{fontSize:'18px' , fontWeight:'400',width:'90%'}}>{txt}</p>);
                })
            }
            <a className="download" href={research.book}>
                To Download Book
                <FontAwesomeIcon icon={faArrowRight} className='icon'/>
            </a>
            <div className="members animate">
                <p className="header">Authors</p>
                {
                    allAuthors.map((members,index)=>{
                        return(<div key={index}>Dr. {members}</div>)
                    })
                }
            </div>
            <p className="header">
                Research Information
            </p>
            <p className = 'animate'style={{fontSize:'18px' , fontWeight:'400'}}>Publication Date : {research.date}</p>
            <p className = 'animate'style={{fontSize:'18px' , fontWeight:'400'}}>Publisher : {research.publisher}</p>
            <p className = 'animate'style={{fontSize:'18px' , fontWeight:'400'}}>Journal : {research.journal}</p>
            <p className = 'animate'style={{fontSize:'18px' , fontWeight:'400'}}>Pages : {research.pages}</p>
            
        </div>
    )
}