import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import BreadCrumb from '../_components/BreadCrumb'
import ServicePostSection1 from './components/ServicePostSection1'
import ServicePostSection2 from './components/ServicePostSection2'
import ServicePostSection3 from './components/ServicePostSection3'
import ServicePostSection4 from './components/ServicePostSection4'

export default function ServicePostPage() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='Our services' crumbs={[{ title: 'Our services', linkTo: '/services' }, { title: 'Accounting and tax advisory services' }]} />
                <div className="clearfix">
                    <ServicePostSection1 />
                    <ServicePostSection2 />
                    <ServicePostSection3 />
                    <ServicePostSection4 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
