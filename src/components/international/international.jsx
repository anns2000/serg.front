import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";
import './international.css'
export default function International() {
  window.scrollTo(0, 0);
  const [international, setInternational] = useState([]);
  const [Loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [interPerPage ] = useState(9);

  useEffect(()=>{
      const fetchBooks = async ()=>{
          setLoading(true);
          const res = await axios.get(`https://serg-api-v2.onrender.com/book/getAll?limit=1000`);
          setInternational(res.data);
          setLoading(false);
      }
      fetchBooks();
  },[]);
  const indexOfLastPage = currentPage * interPerPage;
  const indexOfFirstPage = indexOfLastPage - interPerPage;
  const currentbooks = international.slice(indexOfFirstPage , indexOfLastPage);
  const paginate = PageNumber=> setCurrentPage(PageNumber)
  return (
    (Loading)?<p>Loading------</p>:
    <div className="international-page">
      <div className="header">International Conference</div>
      <div className="full-paper">
        {
            currentbooks.map((data , index)=>{
                return (
                    <div className="inter-card" key={index}>
                      <div className="inter-data">
                        <p>{data.des}</p>
                        <hr />
                        <a href={data.link} target="_block">
                          Read More
                        </a>
                      </div>
                    </div>
                  );
            })
        }
      </div>
      <Pagination chaptersPerPage={interPerPage} totalChapters={international.length} paginate={paginate}/>
    </div>
  );
}
