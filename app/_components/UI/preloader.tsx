import React from 'react'

export default function Preloader() {
    return (
        <div style={{ position: 'fixed', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.5s ease 0s', left: 0, top: 0, width: '100%', height: '100%', background: '#FFF', zIndex: "9999999" }} className="fp-site-preloader-overlay"><div className="fp-preloader-spinner"></div></div>
    )
}
