import ImageSlider from '../someComponents/sliderimage'
import './homepage.css'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default function HomePage(){
    window.scrollTo(0 , 0)
    return(
        <>
        <ImageSlider />
        <div className="information" id="page">
            <div className="header-data">
                <h1>SCIENTIFIC RESEARCH GROUP IN EGYPT</h1>
                <h5>Scientific Research Group in Egypt is a group of young Egyptian researchers established under the chairman of the group founder <span>Prof. Aboul Ella Hassanien</span>. The main target of the group is establishing a research community for sharing common interests.</h5>
            </div>
            <div className="header-otherdata">
            <p>Scientific Research Group in Egypt is a group of young Egyptian researchers established under the chairman of the group founder Prof. Aboul Ella Hassanien. The main target of the group is establishing a research community for sharing common interests.</p>
                <ul>
                   <li><FontAwesomeIcon icon={faMagnifyingGlass}  className = 'icon'/>Smart Technology For Blind and Visually Impaired People</li>
                   <li><FontAwesomeIcon icon={faMagnifyingGlass}  className = 'icon'/>Biomedical Information and Visualizations</li>
                   <li><FontAwesomeIcon icon={faMagnifyingGlass}  className = 'icon'/>Machine Learning</li>
                   <li><FontAwesomeIcon icon={faMagnifyingGlass}  className = 'icon'/>Information and Network Security</li>
                   <li><FontAwesomeIcon icon={faMagnifyingGlass}  className = 'icon'/>Smart Environment and Applications</li>
                </ul>
            </div>
        </div>
        </>
    )
}