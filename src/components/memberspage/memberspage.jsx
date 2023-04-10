import React ,{useState,useEffect}from "react";
import './memberspage.css'

export default function MembersPage(){
    window.scrollTo(0 , 0)
    const [members , setMembers] = useState([]);
    useEffect(()=>{
        fetch('https://serg-api-v2.onrender.com/member/getAll?limit=1000')
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
                                <img src={data.photo} alt='member'/>
                                <div className="team-data">
                                    <div className="team-name"> {data.name}</div>
                                    <hr/>
                                    <div className="team-job">{data.degree}</div>
                                    
                                   <div className="team-job">{data.affiliation}</div>
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