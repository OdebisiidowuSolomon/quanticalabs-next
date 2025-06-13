import React from 'react'
import Header from '../_components/Header'
import { PageBreadCrumb } from '../_components/BreadCrumb'
import BlogPostSection1 from './components/BlogPostSection1'
import BlogPostSection2 from './components/BlogPostSection2'
import Footer from '../_components/Footer'

export default function BlogPost() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <PageBreadCrumb title='Home' label='Blog' crumbs={[{ title: 'Blog' }]} />
                <div className="clearfix">
                    <div className="row page-margin-top-section margin-bottom-100">
                        <BlogPostSection1 />
                        <BlogPostSection2 />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
