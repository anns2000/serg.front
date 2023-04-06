import React ,{useState,useEffect}from "react";
import {Link} from 'react-router-dom';
import './research.css'
export default function ResearchPage(){
    window.scrollTo(0 , 0)
    const [research , setResearch] = useState([]);

    useEffect(()=>{
        fetch('https://mocki.io/v1/d14e77e5-7d6c-4794-9cae-e706d57eb324')
        .then((res)=>res.json())
        .then((res)=>{
            setResearch(res);
        });},[])
    return(
        <div className="researchs">
            <div className="header">
                <p>Researchs</p>
            </div>
            <div className="fullResearch">
                {
                    research.map((data , index)=>{
                        return(
                            <div className="research-card" key={index}>
                                <div className="research-data">
                                    <p>Research : {data.title}</p>
                                    <hr />
                                    <p>Authors : {data.authors}</p>
                                </div>
                                <Link to={`/research/:${index}`} className="readmore">Read More</Link>
                            </div>
                        );
                    })
                }
            </div>
           
        </div>
    );
}