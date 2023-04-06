import React, { useState, useEffect } from "react";
import "./journal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function Books() {
  window.scrollTo(0, 0);
  const [journal, setJournal] = useState([]);
  useEffect(() => {
    fetch("https://serg-api-v2.onrender.com/jorn/getALL?limit=1000")
      .then((res) => res.json())
      .then((res) => {
        setJournal(res);
      });
  }, []);
  function displayList(num) {
    const obj = document.getElementById("publish" + num);
    obj.style.display = obj.style.display === "block" ? "none" : "block";
  }
  return (
    <div className="journal-page">
      <div className="header">Journal Papers</div>
      <div className="journals">
        {journal.map((data, index) => {
          return (
            <div className="journal-data">
              {data.year >= 2022 ? (
                <>
                  <div className="year">Publications {data.year}</div>
                  <div className="full-data">
                    {data.publications.map((pub, index) => {
                      return (
                        <div className="research-card" key={index}>
                          <div className="research-data">
                            <p>{pub.description}</p>
                            <hr />
                            <a href={pub.link} target="_block">
                              Read More
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="year data-list"
                    onClick={() => displayList(index)}
                  >
                    <p>Publications {data.year}</p>{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </div>
                  <ul id={`publish${index}`}>
                    {data.publications.map((pub, index) => {
                      return (
                        <li>
                          <p>{pub.description}</p>
                          <a href={pub.link} target="_block">
                            Read More
                          </a>
                          <hr />
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
