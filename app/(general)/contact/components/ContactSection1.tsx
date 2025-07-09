import React from 'react'

function ContactSection1() {
    return (
        <div className="row full-width">
            <div className="row relative">
                <div className="contact-map-details">
                    <img className="display-block" src="/images/image_05_2.jpg" alt="img" />
                    <div className="contact-details-content">
                        <h5>Insur Consulting Ltd<br />4744 Havanna Street<br />Greensboro, NC 27444</h5>
                        <a className="fp-action-button template-location3 margin-top-36" target="_blank" href="https://www.google.pl/maps/search/Greensboro+NC+27444" title="Plan a route">Plan a route</a>
                    </div>
                </div>
            </div>
            {/* <div className="contact-map" id="map" data-zoom="13" data-scroll-wheel="0" data-marker-lat="45.4005763" data-marker-lng="-75.6837527" data-map-center-lat="45.4005763" data-map-center-lng="-75.6837527"></div> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398866953!2d-0.2664033999507264!3d51.52873980503858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1749720281543!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-map"
                >

            </iframe>
            {/* <div className="contact-map" id="map" data-zoom="13" data-scroll-wheel="0" data-marker-lat="45.4005763" data-marker-lng="-75.6837527" data-map-center-lat="45.4005763" data-map-center-lng="-75.6837527"></div> */}
        </div>
    )
}

export default ContactSection1
