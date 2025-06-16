import React from 'react'
import Header from '../../_components/Header'
import Footer from '../../_components/Footer'
import { PageBreadCrumb } from '../../_components/BreadCrumb'
import BlogsSection1 from './components/BlogsSection1'
import BlogsSection2 from './components/BlogsSection2'

export default function BlogsPage() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <PageBreadCrumb title='Home' label='Blog Classic' crumbs={[{ title: 'Blog Classic' }]} />
                <div className="clearfix">
                    <div className="row page-margin-top-section margin-bottom-100">
                        <BlogsSection1 />
                        <BlogsSection2 />
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}
