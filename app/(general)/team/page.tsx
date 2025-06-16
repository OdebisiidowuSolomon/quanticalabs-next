import React from 'react'
import Header from '../../_components/Header'
import Footer from '../../_components/Footer'
import BreadCrumb from '../../_components/BreadCrumb'
import TeamSection1 from './components/TeamSection1'
import TeamSection2 from './components/TeamSection2'
import TeamSection3 from './components/TeamSection3'

export default function TeamPage() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='Our team' />
                <div className="clearfix">
                    <TeamSection1 />
                    <TeamSection2 />
                    <TeamSection3 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
