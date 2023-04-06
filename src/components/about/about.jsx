import React from "react";
import './about.css'
import owner from '../../images/team-1.jpg'
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
                        <p>Prof. Aboul Ella Hassanien</p>
                        <p>Founder and Chair of SRGE</p>
                        <p>Faculty of Computers and Artificial Intelligence</p>
                    </div>
                </div>
                <div className="about-data">
                    <h1>Prof. Aboul Ella Hassanien</h1>
                    <br/>
                    <p><b>Aboul Ella Hassanien (Abo)</b> is a Professor at Cairo University, Faculty of Computers and Artificial Intelligence, IT Department and the chair of the technology 
                    center of blind and visual impaired people. Abo received his B.Sc. with honours in 1986 and M.Sc degree in 1993, 
                    both from Ain Shams University, Faculty of Science, Pure Mathematics and Computer Science Department, Cairo, Egypt.<br/> <br/> 
                         On September 1998, he received his doctoral degree from the Department of Computer Science, 
                         Graduate School of Science & Engineering, Tokyo Institute of Technology, Japan.<br/><br/>  He is a Full Professor at Cairo University,
                          Faculty of Computer and Information, IT Department.<br/><br/> <b>Professor Aboul Ella</b> is the founder and chair the scientific reserach group in Egypt.<br/><br/> 
                          He has authored/coauthored over 380 research publications in peer-reviewed reputed journals, book chapters and conference proceedings.
                          <br/><br/>  He has served as the general chair, co-chair, program chair, program committee member of various international conferences and 
                          reviewer for various international journals.<br/><br/>  Since 2004, he is actively involved as technical committee in the International 
                          Association of Science and Technology for Development (IASTED) for Image Processing and Signal Processing.<br/><br/>  He has received the
                           Best Young Researcher Award, 1990, Scientific Academic Research, Cairo, Egypt and received the excellence younger researcher awards
                            from Kuwait University for the academic year 2003/2004, He has gain the JSPS fellowship, Tokyo Institute of Technology, Japan.<br/><br/> 
                             He has guest edited many special issues for international scientific journals.<br/><br/>  He has directed many funded research projects.
                             <br/><br/><b>Dr. Abo </b>was a member of the Interim Advisory Board committee of the International Rough Set Society. He is the author, editor 
                             and co-editor for more than 37 books in the area of rough computing, computational intelligence, Intelligent Social networks, Data mining,
                              and E-commerce. <br/><br/> <b>Dr. Abo </b>has been established the formal Egyptian rough Sets Society (ERS) and chair of the Egyptian Rough Set IRSS
                               Chapter. <br/><br/> <b>Dr. Abo </b>is a collaborative researcher member of the Computational Intelligence Laboratory in the Department of Electrical
                                and Computer Engineering at the University of Manitoba.<br/><br/>  Professor <b>Abo</b>  is the chair of the Computer Science and Information 
                                Technology Division at the Egyptian Syndicate of Scientific Professions (ESSP).<br/><br/>  His research interests include, Computational 
                                intelligence, medical image analysis, security, animal identification and multimedia data mining.</p>
                </div>
            </div>
           
        </div>
    )
}
