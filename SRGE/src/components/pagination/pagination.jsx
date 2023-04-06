import React from "react";

const Pagination = ({ chaptersPerPage, totalChapters , paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalChapters / chaptersPerPage); i++) {
    pageNumbers.push(i);
  }
  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor:'#BDA175',
    borderRadius: '10px',
    fontWeight: 'bold',
    color: "white",
    border: "none",
    cursor: "pointer"
  }
  const pagUI = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle:'none',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: "20px"
  }
  return (
    <div>
      <ul className="pagination" style={pagUI}>
        {pageNumbers.map((number) => {
            return(
                <li key={number} className="page-item">
                <button onClick={()=> paginate(number)} style = {buttonStyle}>
                  {number}
                </button>
              </li>
            )
        })}
      </ul>
    </div>
  );
};
export default Pagination;