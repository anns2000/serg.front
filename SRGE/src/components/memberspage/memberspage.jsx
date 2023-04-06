import React ,{useState,useEffect}from "react";
import './memberspage.css'

export default function MembersPage(){
    window.scrollTo(0 , 0)
    const [members , setMembers] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/d7a9d3be-6dbc-4b8d-8a1d-9c3e2c5df26f')
        .then((res)=>res.json())
        .then((res)=>{
            setMembers(res);
        })},[])
    return(
        <>
        <div className="header">
                <p>Members</p>
        </div>
        <div className="researchs members-page">
            
            <div className="fullmembers">
                {
                    members.map((data , index)=>{
                        return(
                            <div className='team-card' key={index}>
                                <img src={data.image} alt='member'/>
                                <div className="team-data">
                                    <div className="team-name">Dr. {data.name}</div>
                                    <hr/>
                                    <div className="team-job">{data.job}</div>
                                </div>   
                            </div>
                        );
                    })
                }
            </div>
           
        </div>
        </>
    );
}