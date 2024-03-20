import React from 'react'
import './contact.css'
import ContactForm from './ContactForm/ContactForm'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

// IMAGES
import IconMail from '../../Assets/Logo/mail.png'
import IconTelegram from '../../Assets/Logo/telegram.png'

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className="contact__container">
            <div className="contact__title title-name-section">Contact
                {/* NUMBERPAGE */}
                <div className="number__page">
                    <span className='text__page'>004</span>
                </div>
            </div>

            <div className="contact__content">
                <div 
                style={{ flex: 1 }}>
                    <ContactInfoCard 
                        iconUrl={IconMail}
                        text="FransAr@gmail.com"
                    />

                    <ContactInfoCard 
                        iconUrl={IconTelegram}
                        text="Frans@16"
                    />
                </div>

                <div 
                style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>


        </div>
    </div>
  )
}

export default Contact