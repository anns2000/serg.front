import React from "react";
import './about.css'
import owner from '../../images/5.jpg'
export default function About(){
    return(
        <div className="about-page">
            <div className="header">
                <p>About</p>
            </div>
            <div className="about-container">
                <div className = 'personal-data'>
                    <img src={owner} alt='owner'/>
                    <div className="card-about">
                  
                        <p>Scientific Research Group in Egypt</p>
                    </div>
                </div>
                <div className="about-data">
              
                    <h1>Scientific Research Group in Egypt</h1>
                    <br></br>
	

<p  className="about-p">The Scientific Research Group in Egypt (SRGE) is one of the largest research schools in Egypt and the Arab world that conducts a range of research and community activities in the field of artificial intelligence and its applications across different domains. Its main objectives are:</p>
<ul className="about-li">
  <li>To facilitate and encourage collaboration among young Egyptian researchers and increase their contributions to academic research.</li>
  <li>To explore the use of artificial intelligence to address challenging real-life problems across different scientific fields.</li>
  <li>To foster scientific and technological excellence in a specific research area.</li>
  <li>To integrate the research efforts of the scientific team to drive innovation in scientific, technological, and socio-economic trajectories that shape the future of AI and its applications.</li>
  <li>To produce Master's and PhD graduates who are capable of conducting high-quality academic research, publishing in top academic journals, obtaining tenure-track faculty positions at leading research universities, and excelling as educators and academics.</li>
</ul>
<p className="about-p">SRGE conducts applied research in artificial intelligence, with research results being applied to a wide range of fields, including medicine, agriculture, animal studies, climate change, renewable energy, cybersecurity, and the Internet of Things. The group covers a range of disciplines, including:</p>
<ul  className="about-li">
  <li>AI and applications</li>
  <li>Computational biology</li>
  <li>Metaverses</li>
  <li>Climate change</li>
  <li>Drug discovery</li>
  <li>Operations research</li>
  <li>Industrial Engineering</li>
  <li>Computational Intelligence</li>
</ul>
                    </div>

            </div>
           
        </div>
    )
}
