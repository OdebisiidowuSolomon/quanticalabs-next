import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import BreadCrumb from '../_components/BreadCrumb'
import AboutSection1 from './components/AboutSection1'
import AboutSection2 from './components/AboutSection2'
import AboutSection3 from './components/AboutSection3'
import AboutSection4 from './components/AboutSection4'
import AboutSection5 from './components/AboutSection5'

export default function AboutPage() {


    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='About' crumbs={[{ title: 'About' }]} />
                <div className="clearfix">
                    <AboutSection1 />
                    <AboutSection2 />
                    <AboutSection3 />
                    <AboutSection4 />
                    <AboutSection5 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
