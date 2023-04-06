import axios from "axios";
import React ,{useState , useEffect}from "react";
import Pagination from "../pagination/pagination";
import './books.css'
export default function Books(){
    window.scrollTo(0,0)
    const [books , setBooks] = useState([]);
    const [Loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [booksPerPage ] = useState(6);

    useEffect(()=>{
        const fetchBooks = async ()=>{
            setLoading(true);
            const res = await axios.get(`https://serg-api-v2.onrender.com/book/getAll?limit=100`);
            setBooks(res.data);
            setLoading(false);
        }
        fetchBooks();
    },[]);
    const indexOfLastPage = currentPage * booksPerPage;
    const indexOfFirstPage = indexOfLastPage - booksPerPage;
    const currentbooks = books.slice(indexOfFirstPage , indexOfLastPage);
    const paginate = PageNumber=> setCurrentPage(PageNumber)
    return(
        (Loading)?<p>Loading.....</p>:
        <div className ="books-page">
            <div className = 'header'>Books</div>
            <div className = 'all-books'>
                {
                    currentbooks.map((book , index)=>{
                        return(
                            <div className='book' key={index}>
                                <img src={book.photo} alt='bookImage'/>
                                <div className="books-data">
                                    <p className='name'>{book.name}</p>
                                    <p>{book.des}</p>
                                    <a href={book.link} target='_block'>Book</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination chaptersPerPage={booksPerPage} totalChapters={books.length} paginate={paginate}/>
        </div>
    );
}