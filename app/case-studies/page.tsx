import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import BreadCrumb from '../_components/BreadCrumb'
import CaseStudiesSection1 from './components/CaseStudiesSection1'
import CaseStudiesSection2 from './components/CaseStudiesSection2'

export default function page() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='Case studies' crumbs={[{ title: 'Case studies' }]} />
                <div className="clearfix">
                    <CaseStudiesSection1 />
                    <CaseStudiesSection2 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
