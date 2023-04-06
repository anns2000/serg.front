import React ,{useState , useEffect}from "react";
import './eventpage.css';
export default function ResearchPage(){
    window.scrollTo(0 , 0)
    const [research , setResearch] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/7c79819c-75af-4329-aafc-91641593bcc1')
        .then((res)=>res.json())
        .then((res)=>{
            setResearch(res);
        })
    },[])
    function getTimeDetails(date){
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const mo = new Date(date);
        const day= mo.getDay();
        const month= months[mo.getMonth()];
        const hour = mo.getHours();
        return {day , month , hour};
    }
    return(
        <div className="events">
            <div className="header"><p>Eevents</p></div>
            <div className="fullEvents">
                {
                    research.map((data , index)=>{
                        let details = getTimeDetails(data.date);
                        return(
                            <div className={`card event-card`} key={index}>
                                <div className="event-image"><img src={data.image} alt="eventImage"/></div>
                                <div className="event-data">
                                    <div className="date">
                                        <div className="month">{details.month}</div>
                                        <div className="day">{details.day+1}</div>
                                    </div>
                                    <div className="fulldata">
                                        <p className= "title" style={{fontSize: '20px'}}>{data.title}</p>
                                        <hr/>
                                        <div className="location">
                                            <p>Location : {data.location}</p>
                                        </div>
                                        <div className="time">
                                            <p>Time : {details.hour} h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
           
        </div>
    );
}