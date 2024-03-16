import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet' 

const Contact = () => {
    const [letterClass, setLettersClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'service_507i1od',
                'template_3zzctkd',
                refForm.current,
                'tyxqYQnd8zgrwRhNi'
            ).then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t' ,' ','m','e']} idx ={15} />
                    </h1>
                    <p>
                        I am intrested in internship and research opportunities. If you have requests or questions, don't hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Name' type='text' name='name' required/>
                                </li>
                                <li className='half'>
                                    <input  placeholder='Email' type='email' name='email' required/>
                                </li>
                                <li>
                                    <input  placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Abiye Berhanu,
                    <br/>
                    United States of America,
                    <br/>
                    445 Paul hardin Dr,
                    <br/>
                    Chapel Hill, NC.
                    <br/>
                    <span>aberhanu@ad.unc.edu</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[35.904451,-79.046219]} zoom={16}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                        <Marker position={[35.904451,-79.046219]}>
                            <Popup>I live here.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact