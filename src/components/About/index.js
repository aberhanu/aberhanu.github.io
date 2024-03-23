import './index.scss'
import AnimateLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLettersClass] = useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimateLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ', 'm','e']}
                            idx={15} 
                        />
                    </h1>
                    <p>I'm a very ambitious full-stack & software developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                    <p align="LEFT">I'm confident, naturally curious, and constantly learning and imporoving myself.</p>
                    <p>If I need to define myself in one sentence that would be a hard-working person, world traveler, a sports fanatic, a curious soul, and tech-obsessed!!!</p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>

                    </div>
                    
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default About