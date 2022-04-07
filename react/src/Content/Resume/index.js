import profile from './img/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faEnvelope, faMobileScreenButton, faLocationDot, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

const Resume = () => (
    <div>
        <div id="resume_sidebar">
            <img src={profile} alt="Selfie" />

            <div><FontAwesomeIcon icon={faEnvelope} /> katiekim.aram@gmail.com</div>
            <div><FontAwesomeIcon icon={faMobileScreenButton} /> +1 ( 512 ) 299 - 5894</div>
            <div><FontAwesomeIcon icon={faLocationDot} /> Austin, TX</div>
            <div><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/katiekim1995</div>
            <div><FontAwesomeIcon icon={faGithub} /> github.com/vaxenvixen</div>
            <div><FontAwesomeIcon icon={faGlobe} /> katiekim.dev</div>

            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>

            <a href="#skill">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education & Certifications</a>
            <a href="#interests">Interests</a>
        </div>

        <div id="resume_content">
            <div class="about">
                <h2><span>Aram</span> Katie Kim</h2>
                <h3>Full Stack Engineer</h3>

                <p class="description">
                    Full stack engineer with proven ability to collaborate effectively with senior developers. Working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally taking on additional responsibilities when necessary. With a passion for both personal and software development growth. Continuing to take time to spend countless hours on free and paid coding resources, and attending a coding bootcamps to sharpen, hone, and learn new languages. Ready to apply my passion for coding to a talented engineering team and develop quality solutions.
                </p>
            </div>

            <div class="experience">

            </div>

            <div class="projects">

            </div>

        </div>
    </div>
);

export default Resume;