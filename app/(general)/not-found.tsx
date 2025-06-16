import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'


export default function NotFoundPage() {
    return (
        <div className="site-container">
            <Header />

            <div className="theme-page">
                <div className="row full-width page-header padding-top-100 padding-bottom-100">
                    <div className="row page-padding-top padding-bottom-50">
                        <div className="column column-1-2 padding-left-right-70">
                            <div className="single-image fp-preload">
                                <img src="/images/404.png" alt="" />
                            </div>
                        </div>
                        <div className="column column-1-2">
                            <label className="box-header margin-top-44">OOPS...</label>
                            <h2 className="box-header margin-top-15">Page not found</h2>
                            <h5 className="margin-top-40">It looks like you're trying to access a page that either has been deleted or never existed. Don't let this stop you and keep browsing.</h5>
                            <a className="more margin-top-47" href="/home" title="Back to home">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
