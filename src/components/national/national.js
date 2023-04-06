import React, { useEffect, useState } from "react";
import './national.css';
export default function National() {
  window.scrollTo(0, 0);
  const [natio , setNational] = useState([]);
  useEffect(()=>{
    fetch('https://serg-api-v2.onrender.com/national/getALL?limit=1000')
    .then((res)=>res.json())
    .then((res)=>{
        setNational(res);
});},[]);
  return (
    <div className="national-page">
      <div className="header">Conference papers</div>
      <div className="nationals">
        <ul>
          {
            natio.map((data , index)=>{
              return <li><p>{data.des}</p><hr /></li>

            })
          }
         </ul>
      </div>
    </div>
  );
}
