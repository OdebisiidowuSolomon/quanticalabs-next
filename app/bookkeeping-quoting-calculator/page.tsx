import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import BreadCrumb from '../_components/BreadCrumb'
import CalculatorSection1 from './components/CalculatorSection1'
import CalculatorSection2 from './components/CalculatorSection2'


export default function BookKeepingCalculatorPage() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <BreadCrumb title='Home' label='Blog Classic' crumbs={[{ title: 'Blog Classic' }]} />
                <div className="clearfix">
                    <CalculatorSection1 />
                    <CalculatorSection2 />
                </div>
            </div>

            <Footer />

        </div>
    )
}
