import axios from "axios";
import React ,{useState , useEffect}from "react";
import './bookchapter.css'
import Pagination from "../pagination/pagination";
export default function Chapters(){
    window.scrollTo(0 , 0)   
    const [chapters , setChapters] = useState([]);
    const [Loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [chaptersPerPage ] = useState(5);
    useEffect(()=>{
        const fetchChapters = async ()=>{
            setLoading(true);
            const res = await axios.get(`https://serg-api-v2.onrender.com/bookChapters/getAll?limit=300`);
            setChapters(res.data);
            setLoading(false);
        }
        fetchChapters();
    },[]);
    const indexOfLastPage = currentPage * chaptersPerPage;
    const indexOfFirstPage = indexOfLastPage - chaptersPerPage;
    const currentChapters = chapters.slice(indexOfFirstPage , indexOfLastPage);
    const paginate = PageNumber=> setCurrentPage(PageNumber)

    return(
        (Loading)?<p>Loading........</p>:
        <div className = 'chapters'>
            <div className="header">Book Chapters</div>
            <div className="books">
                {
                    currentChapters.map((chapter , index)=>{
                        return(
                            <div className="book-data" key={index}>
                                <div className="book-header">
                                    {
                                        (chapter.photo)?<img src={chapter.photo} alt='book'/>:<></>

                                    }
                                    <p>{chapter.name}</p>
                                </div>
                                <br/>
                                <div className="all-chapters">
                                    {
                                        chapter.allChapters.map((des , index)=>{
                                            return(
                                                <>
                                                <div className="chapter-data">
                                                    <div className="index">{index+1}</div>
                                                    <div className="desc">
                                                        <p>{des.des}</p>
                                                        {
                                                            (des.getChapter)?<a href = {des.getChapter} target="_blank">Read More</a>:<></>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                <hr/>
                                                </>
                                                
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination chaptersPerPage={chaptersPerPage} totalChapters={chapters.length} paginate={paginate}/>
        </div>
    )
}