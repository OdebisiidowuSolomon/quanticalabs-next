import React from 'react'
import Header from '../../_components/Header'
import Footer from '../../_components/Footer'
import BreadCrumb from '../../_components/BreadCrumb'
import CaseStudyPostSection1 from './components/CaseStudyPostSection1'
import CaseStudyPostSection2 from './components/CaseStudyPostSection2'
import CaseStudyPostSection3 from './components/CaseStudyPostSection3'
import CaseStudyPostSection4 from './components/CaseStudyPostSection4'

export default function page() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='Case studies' crumbs={[{ title: 'Case studies' }]} />
                <div className="clearfix">
                    <CaseStudyPostSection1 />
                    <CaseStudyPostSection2 />
                    <CaseStudyPostSection3 />
                    <CaseStudyPostSection4 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
