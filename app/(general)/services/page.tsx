import React from 'react'
import Header from '../../_components/Header'
import Footer from '../../_components/Footer'
import BreadCrumb from '../../_components/BreadCrumb'
import ServicesSection1 from './components/ServicesSection1'
import ServicesSection2 from './components/ServicesSection2'

export default function ServicesPage() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='Our services' crumbs={[{ title: 'Our services' }]} />
                <div className="clearfix">
                    <ServicesSection1 />
                    <ServicesSection2 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
